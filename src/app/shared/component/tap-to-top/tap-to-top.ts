import { ViewportScroller } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";

import { Feathericon } from "../feathericon/feathericon";

@Component({
  selector: "app-tap-to-top",
  imports: [Feathericon],
  templateUrl: "./tap-to-top.html",
  styleUrl: "./tap-to-top.scss",
})
export class TapToTop {
  private viewScroller = inject(ViewportScroller);

  public isShow: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 400) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
