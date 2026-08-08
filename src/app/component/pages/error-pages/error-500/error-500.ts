import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-error-500",
  imports: [RouterModule],
  templateUrl: "./error-500.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error-500.scss",
})
export class Error500 {}
