import { Directive, Input, input, output } from "@angular/core";

import { productListInterface } from "../data/ecommerce/product-list";

export type SortColumn = keyof productListInterface | "";
export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = {
  asc: "desc",
  desc: "",
  "": "asc",
};

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: "th[sortable]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()",
  },
})
export class ProductListDirective {
  constructor() {}
  readonly sortable = input<SortColumn>("");
  @Input() direction: SortDirection = "";
  readonly sort = output<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable(), direction: this.direction });
  }
}
