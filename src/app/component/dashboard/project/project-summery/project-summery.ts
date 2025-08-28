import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import {
  ProjectSummerys,
  summery,
} from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";
import {
  ProjectSummeryDirective,
  SortEvent,
} from "../../../../shared/directive/project-summery.directive";
import { ProjectSummeryService } from "../../../../shared/services/project-summery.service";

@Component({
  selector: "app-project-summery",
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectSummeryDirective,
    ClickOutsideDirective,
  ],
  templateUrl: "./project-summery.html",
  styleUrl: "./project-summery.scss",
  providers: [ProjectSummeryService, DecimalPipe],
})
export class ProjectSummery {
  service = inject(ProjectSummeryService);

  public tableData$: Observable<summery[]>;
  public Data: summery[];
  public tableData = ProjectSummerys;
  public total$: Observable<number>;
  public isOpen: boolean = false;

  readonly headers = viewChildren(ProjectSummeryDirective);

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

  get filteredData(): summery[] {
    return this.tableData.filter(
      (person: {
        name: string;
        location: string;
        type: string;
        status: string;
        date: string;
      }) => {
        return (
          person.name
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.location
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.type
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.status
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase()) ||
          person.date
            .toLowerCase()
            .includes(this.service.searchTerm.toLowerCase())
        );
      },
    );
  }

  show(id: number) {
    this.Data.filter((data) => {
      if (data.id === id) {
        data.isActive = !data.isActive;
      }
    });
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

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
