import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { TopProjectData } from "../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-top-common-project",
  imports: [NgbModule, CommonModule],
  templateUrl: "./top-common-project.html",
  styleUrl: "./top-common-project.scss",
})
export class TopCommonProject {
  public TopProjectData = TopProjectData;
}
