import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import * as Data from "../../../shared/data/job-search/job-search";

@Component({
  selector: "app-job-filter",
  imports: [NgbModule, Feathericon],
  templateUrl: "./job-filter.html",
  styleUrl: "./job-filter.scss",
})
export class JobFilter {
  public filterData = Data.filterData;
  public filterChackBox = Data.filterChackBox;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  public OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
