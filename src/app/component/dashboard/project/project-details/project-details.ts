import { Component, input, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CardData } from "../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-project-details",
  imports: [NgbModule, RouterModule],
  templateUrl: "./project-details.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./project-details.scss",
})
export class ProjectDetails {
  readonly Data = input<CardData[]>();
}
