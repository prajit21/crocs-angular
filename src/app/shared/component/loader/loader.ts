import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-loader",
  imports: [],
  templateUrl: "./loader.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./loader.scss",
})
export class Loader {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
