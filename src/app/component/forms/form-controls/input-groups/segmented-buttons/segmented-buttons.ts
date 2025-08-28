import { Component } from "@angular/core";

@Component({
  selector: "app-segmented-buttons",
  imports: [],
  templateUrl: "./segmented-buttons.html",
  styleUrl: "./segmented-buttons.scss",
})
export class SegmentedButtons {
  public show: boolean = false;
  public show2: boolean = false;

  openMenu() {
    this.show = !this.show;
  }

  openMenu2() {
    this.show2 = !this.show2;
  }
}
