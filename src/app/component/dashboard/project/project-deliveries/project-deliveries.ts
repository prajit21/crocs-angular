import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { ProjectDeliveriesChart } from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-project-deliveries",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./project-deliveries.html",
  styleUrl: "./project-deliveries.scss",
})
export class ProjectDeliveries {
  public ProjectDeliveries = ProjectDeliveriesChart;

  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
