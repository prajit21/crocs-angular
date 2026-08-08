import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-error-400",
  imports: [RouterModule],
  templateUrl: "./error-400.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error-400.scss",
})
export class Error400 {}
