import { DecimalPipe } from "@angular/common";
import { Injectable, PipeTransform, inject } from "@angular/core";

import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { debounceTime, delay, switchMap, tap } from "rxjs/operators";

import {
  productListData,
  productListInterface,
} from "../../../shared/data/ecommerce/product-list";
import {
  SortColumn,
  SortDirection,
} from "../../directive/product-list.directive";

interface SearchResult {
  support: productListInterface[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (
  v1: string | number | boolean,
  v2: string | number | boolean,
) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(
  support: productListInterface[],
  column: SortColumn,
  direction: string,
): productListInterface[] {
  if (direction === "" || column === "") {
    return support;
  } else {
    return [...support].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === "asc" ? res : -res;
    });
  }
}

function matches(
  ticket: productListInterface,
  term: string,
  _pipe: PipeTransform,
) {
  return (
    ticket.name.toLowerCase().includes(term.toLowerCase()) ||
    ticket.category.toLowerCase().includes(term.toLowerCase()) ||
    ticket.sku.toLowerCase().includes(term.toLowerCase()) ||
    ticket.status.toLowerCase().includes(term.toLowerCase()) ||
    ticket.img.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({
  providedIn: "root",
})
export class ProductListService {
  private pipe = inject(DecimalPipe);

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _support$ = new BehaviorSubject<productListInterface[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: "",
    sortColumn: "",
    sortDirection: "",
  };

  constructor() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe((result) => {
        this._support$.next(result.support);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get support$() {
    return this._support$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let support = sort(productListData, sortColumn, sortDirection);

    // 2. filter
    support = support.filter((ticket) =>
      matches(ticket, searchTerm, this.pipe),
    );
    const total = support.length;

    // 3. paginate
    support = support.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize,
    );
    return of({ support, total });
  }
}
