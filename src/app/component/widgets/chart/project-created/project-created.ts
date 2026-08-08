import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { ProjectCreatedChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-project-created",
  imports: [NgApexchartsModule],
  templateUrl: "./project-created.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./project-created.scss",
})
export class ProjectCreated {
  public projectCreatedChart = ProjectCreatedChart;
}
