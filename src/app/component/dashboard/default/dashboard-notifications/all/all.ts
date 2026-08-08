import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-all",
  imports: [RouterModule],
  templateUrl: "./all.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./all.scss",
})
export class All {}
