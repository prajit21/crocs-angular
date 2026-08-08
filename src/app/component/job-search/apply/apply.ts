import { Component, ChangeDetectionStrategy } from "@angular/core";

import { JobFilter } from "../job-filter/job-filter";
import { ApplyForm } from "./apply-form/apply-form";

@Component({
  selector: "app-apply",
  imports: [JobFilter, ApplyForm],
  templateUrl: "./apply.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./apply.scss",
})
export class Apply {}
