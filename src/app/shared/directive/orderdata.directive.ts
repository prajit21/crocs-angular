import { Directive, Input, input, output } from "@angular/core";

import { ORDERS } from "../interface/odershistory";

export type SortColumn = keyof ORDERS | "";
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
  selector: "th[sortableOrder]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()",
  },
})
export class OrderdataTableDirective {
  constructor() {}

  readonly sortableOrder = input<SortColumn>("");
  @Input() direction: SortDirection = "";
  readonly sort = output<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortableOrder(), direction: this.direction });
  }
}
