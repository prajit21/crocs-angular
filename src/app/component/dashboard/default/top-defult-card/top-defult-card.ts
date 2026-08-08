import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-top-defult-card",
  imports: [RouterModule],
  templateUrl: "./top-defult-card.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./top-defult-card.scss",
})
export class TopDefultCard {}
