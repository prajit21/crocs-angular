import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-following",
  imports: [RouterModule],
  templateUrl: "./following.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./following.scss",
})
export class Following {}
