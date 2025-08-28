import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-buttons-with-dropdowns",
  imports: [CommonModule, NgbModule],
  templateUrl: "./buttons-with-dropdowns.html",
  styleUrl: "./buttons-with-dropdowns.scss",
})
export class ButtonsWithDropdowns {
  public open: boolean = false;
  public open2: boolean = false;
  public open3: boolean = false;
  public open4: boolean = false;

  openMenu() {
    this.open = !this.open;
  }

  openMenu2() {
    this.open2 = !this.open2;
  }

  openMenu3() {
    this.open3 = !this.open3;
  }

  openMenu4() {
    this.open4 = !this.open4;
  }
}
