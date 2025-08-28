import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import {
  productListData,
  productListInterface,
} from "../../../../shared/data/ecommerce/product-list";
import {
  ProductListDirective,
  SortEvent,
} from "../../../../shared/directive/product-list.directive";
import { ProductListService } from "../../../../shared/services/ecommerce/product-list.service";

@Component({
  selector: "app-product-data-table",
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ProductListDirective,
    RouterModule,
  ],
  providers: [ProductListService, DecimalPipe],
  templateUrl: "./product-data-table.html",
  styleUrl: "./product-data-table.scss",
})
export class ProductDataTable {
  service = inject(ProductListService);
  config = inject(NgbRatingConfig);

  public products$: Observable<productListInterface[]>;
  public products = productListData;
  public total$: Observable<number>;
  public Data: productListInterface[];

  readonly headers = viewChildren(ProductListDirective);

  constructor() {
    const service = this.service;
    const config = this.config;

    config.max = 5;
    config.readonly = true;
    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products$.subscribe((res) => {
      this.Data = res;
    });
  }

  get filteredData(): productListInterface[] {
    return this.products.filter(
      (person: {
        img: string;
        name: string;
        sku: string;
        category: string;
        status: string;
      }) => {
        return (
          person.name
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.img
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.sku
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.category
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.status
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase())
        );
      },
    );
  }

  getStartingIndex(): number {
    if (this.filteredData.length === 0) {
      return 0;
    }
    return (this.service.page - 1) * this.service.pageSize + 1;
  }

  getEndingIndex(): number {
    const endIndex = this.service.page * this.service.pageSize;
    return endIndex > this.filteredData.length
      ? this.filteredData.length
      : endIndex;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortable() !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
