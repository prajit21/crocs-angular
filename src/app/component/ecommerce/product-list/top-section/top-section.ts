import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { ProductDataTable } from "../product-data-table/product-data-table";

@Component({
  selector: "app-top-section",
  imports: [ProductDataTable, Feathericon, RouterModule, NgClass],
  templateUrl: "./top-section.html",
  styleUrl: "./top-section.scss",
})
export class TopSection {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }
}
