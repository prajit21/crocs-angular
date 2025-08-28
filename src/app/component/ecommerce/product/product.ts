import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { Filter } from "./filter/filter";
import { ProductBox } from "./product-box/product-box";
import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ProductBoxFilterService } from "../../../shared/services/ecommerce/product-box-filter.service";

@Component({
  selector: "app-product",
  imports: [CommonModule, Filter, ProductBox, Feathericon],
  templateUrl: "./product.html",
  styleUrl: "./product.scss",
})
export class Product {
  private ProductBoxFilterService = inject(ProductBoxFilterService);

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public OpenFilter: boolean = false;

  gridOpens() {
    this.listView = false;
    this.ProductBoxFilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.ProductBoxFilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.ProductBoxFilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.ProductBoxFilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.ProductBoxFilterService.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }

  openFilter() {
    this.openSidebar = !this.openSidebar;
  }

  clickOutside(): void {
    this.openSidebar = false;
  }
}
