import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonCharts } from "./common-charts/common-charts";
import { TeamMemberTable } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-team-members",
  imports: [CommonCharts, ClickOutsideDirective, RouterModule],
  templateUrl: "./team-members.html",
  styleUrl: "./team-members.scss",
})
export class TeamMembers {
  public TeamMemberData = TeamMemberTable;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
