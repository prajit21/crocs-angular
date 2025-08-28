import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { ProjectStatisticsChart } from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-project-statistics",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./project-statistics.html",
  styleUrl: "./project-statistics.scss",
})
export class ProjectStatistics {
  public ProjectStatisticsChart = ProjectStatisticsChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
