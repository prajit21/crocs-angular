import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { JobFilter } from "../job-filter/job-filter";
import { JobSimiler } from "./job-similer/job-similer";
import { jobDetails } from "../../../shared/data/job-search/job-search";

@Component({
  selector: "app-job-details",
  imports: [JobFilter, JobSimiler, CommonModule],
  templateUrl: "./job-details.html",
  styleUrl: "./job-details.scss",
})
export class JobDetails {
  public jobDetails = jobDetails;
}
