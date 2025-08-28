import { DecimalPipe, CommonModule } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import { SUPPORTDB } from "../../../shared/data/table/SupportTdb";
import {
  NgbdSortableHeaderDirective,
  SortEvent,
} from "../../../shared/directive/sortable.directive";
import { supportDB } from "../../../shared/interface/support";
import { TableService } from "../../../shared/services/table.service";

@Component({
  selector: "app-data-table",
  imports: [
    CommonModule,
    FormsModule,
    NgbdSortableHeaderDirective,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [TableService, DecimalPipe],
  templateUrl: "./data-table.html",
  styleUrl: "./data-table.scss",
})
export class DataTable {
  service = inject(TableService);

  public tableData$: Observable<supportDB[]>;
  public tableData = SUPPORTDB;
  public Data: supportDB[];
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective);

  constructor() {
    const service = this.service;

    this.tableData$ = service.supportdata$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.tableData$.subscribe((res) => {
      this.Data = res;
    });
  }

  get filteredData(): supportDB[] {
    return this.tableData.filter(
      (person: {
        name: string;
        position: string;
        office: string;
        email: string;
      }) => {
        return (
          person.name
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.position
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.office
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.email
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
    return Math.min(endIndex, this.filteredData.length);
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
