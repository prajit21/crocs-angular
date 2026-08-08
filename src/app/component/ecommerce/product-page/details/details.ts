import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-details",
  imports: [RouterModule],
  templateUrl: "./details.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./details.scss",
})
export class Details {}
