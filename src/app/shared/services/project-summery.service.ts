import { DecimalPipe } from "@angular/common";
import { Injectable, PipeTransform } from "@angular/core";

import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  delay,
  of,
  switchMap,
  tap,
} from "rxjs";

import { summery, ProjectSummerys } from "../data/dashboard/project/project";
import {
  SortColumn,
  SortDirection,
} from "../directive/project-summery.directive";

interface SearchResult {
  Details: summery[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  projectData: summery[],
  column: SortColumn,
  direction: string,
): summery[] {
  if (direction === "" || column === "") {
    return projectData;
  } else {
    return [...projectData].sort((a, b) => {
      const res = compare(
        a[column] as string | number,
        b[column] as string | number,
      );
      return direction === "asc" ? res : -res;
    });
  }
}

function matches(project: summery, term: string, _pipe: PipeTransform) {
  return (
    project.name.toLowerCase().includes(term.toLowerCase()) ||
    project.date.toLowerCase().includes(term.toLowerCase()) ||
    project.location.toLowerCase().includes(term.toLowerCase()) ||
    project.type.toLowerCase().includes(term.toLowerCase()) ||
    project.status.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({
  providedIn: "root",
})
export class ProjectSummeryService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _data$ = new BehaviorSubject<summery[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 3,
    searchTerm: "",
    sortColumn: "",
    sortDirection: "",
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe((result) => {
        this._data$.next(result.Details);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get supportdata$() {
    return this._data$.asObservable();
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
    let Details = sort(ProjectSummerys, sortColumn, sortDirection);

    // 2. filter
    Details = Details.filter((support) =>
      matches(support, searchTerm, this.pipe),
    );
    const total = Details.length;

    // 3. paginate
    Details = Details.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize,
    );
    return of({ Details, total });
  }
}
