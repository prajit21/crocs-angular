import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-full",
  imports: [RouterOutlet],
  templateUrl: "./full.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./full.scss",
})
export class Full {}
