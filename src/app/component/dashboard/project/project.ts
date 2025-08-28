import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ProjectDeliveries } from "./project-deliveries/project-deliveries";
import { ProjectDetails } from "./project-details/project-details";
import { ProjectStatistics } from "./project-statistics/project-statistics";
import { ProjectSummery } from "./project-summery/project-summery";
import { TeamMembers } from "./team-members/team-members";
import { TodayTask } from "./today-task/today-task";
import { TopCommonProject } from "./top-common-project/top-common-project";
import { TotalRevenue } from "./total-revenue/total-revenue";
import { UpcomingDeadlines } from "./upcoming-deadlines/upcoming-deadlines";
import { UpgradeSubscriptionPlan } from "./upgrade-subscription-plan/upgrade-subscription-plan";
import {
  projectDetails1,
  projectDetails2,
  projectDetails3,
} from "../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-project",
  imports: [
    TopCommonProject,
    TotalRevenue,
    UpgradeSubscriptionPlan,
    TodayTask,
    ProjectSummery,
    ProjectStatistics,
    ProjectDeliveries,
    ProjectDetails,
    TeamMembers,
    UpcomingDeadlines,
    CommonModule,
    NgbModule,
  ],
  templateUrl: "./project.html",
  styleUrl: "./project.scss",
})
export class Project {
  public projectData1 = projectDetails1;
  public ProjectData2 = projectDetails2;
  public ProjectData3 = projectDetails3;
}
