import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-maintenance",
  imports: [RouterModule],
  templateUrl: "./maintenance.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./maintenance.scss",
})
export class Maintenance {}
