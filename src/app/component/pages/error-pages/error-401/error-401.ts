import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-error-401",
  imports: [RouterModule],
  templateUrl: "./error-401.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error-401.scss",
})
export class Error401 {}
