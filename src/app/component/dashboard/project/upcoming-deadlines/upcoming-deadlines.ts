import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { UpcomingDeadline } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-upcoming-deadlines",
  imports: [ClickOutsideDirective, NgbModule, CommonModule, RouterModule],
  templateUrl: "./upcoming-deadlines.html",
  styleUrl: "./upcoming-deadlines.scss",
})
export class UpcomingDeadlines {
  public upcomingdedlineData = UpcomingDeadline;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
