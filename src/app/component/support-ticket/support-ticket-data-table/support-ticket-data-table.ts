import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import {
  SUPPORTDB,
  supportDB,
} from "../../../shared/data/support-ticket/support-ticket";
import {
  NgbdSortableHeaderDirective2Directive,
  SortEvent,
} from "../../../shared/directive/support-ticket.directive";
import { SupportTicketService } from "../../../shared/services/support-ticket.service";

@Component({
  selector: "app-support-ticket-data-table",
  imports: [
    NgbdSortableHeaderDirective2Directive,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [SupportTicketService, DecimalPipe],
  templateUrl: "./support-ticket-data-table.html",
  styleUrl: "./support-ticket-data-table.scss",
})
export class SupportTicketDataTable {
  service = inject(SupportTicketService);

  public countries$: Observable<supportDB[]>;
  public tableData = SUPPORTDB;
  public Data: supportDB[];
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective2Directive);

  constructor() {
    const service = this.service;

    this.countries$ = service.support$;
    this.total$ = service.total$;
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

  ngOnInit() {
    this.countries$.subscribe((res) => {
      this.Data = res;
    });
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
