import { Component, ChangeDetectionStrategy } from "@angular/core";

import { TopSection } from "./top-section/top-section";

@Component({
  selector: "app-product-list",
  imports: [TopSection],
  templateUrl: "./product-list.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./product-list.scss",
})
export class ProductList {}
