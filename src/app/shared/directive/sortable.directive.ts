import { Directive, Input, input, output } from "@angular/core";

import { supportDB } from "../interface/support";

export type SortColumn = keyof supportDB | "";
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
export class NgbdSortableHeaderDirective {
  readonly sortable = input<SortColumn>("");
  @Input() direction: SortDirection = "";
  readonly sort = output<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable(), direction: this.direction });
  }
}
