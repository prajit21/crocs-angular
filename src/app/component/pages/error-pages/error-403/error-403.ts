import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-error-403",
  imports: [RouterModule],
  templateUrl: "./error-403.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error-403.scss",
})
export class Error403 {}
