import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-error-404",
  imports: [RouterModule],
  templateUrl: "./error-404.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error-404.scss",
})
export class Error404 {}
