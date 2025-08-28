import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import {
  ProjectLists,
  Project,
} from "../../../shared/data/project/project-list";

@Component({
  selector: "app-project-list",
  imports: [CommonModule, Feathericon, RouterModule],
  templateUrl: "./project-list.html",
  styleUrl: "./project-list.scss",
})
export class ProjectList {
  public active = 1;
  public openTab: string = "All";
  public ProjectLists = ProjectLists;
  public listUser: Project[] = [];
  public filterData: Project[] = this.ProjectLists;

  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== "All"
        ? this.ProjectLists.filter((data: Project) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
