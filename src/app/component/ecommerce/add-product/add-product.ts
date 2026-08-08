import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AddProductDetails } from "./add-product-details/add-product-details";
import { Advance } from "./advance/advance";
import { ProductCategoies } from "./product-categoies/product-categoies";
import { ProductsFromStepe } from "./products-from-stepe/products-from-stepe";
import { ProductsGallery } from "./products-gallery/products-gallery";
import { SellingPrice } from "./selling-price/selling-price";
import { AddProducts } from "../../../shared/data/ecommerce/add-product";

@Component({
  selector: "app-add-product",
  imports: [
    NgbModule,
    ProductsFromStepe,
    AddProductDetails,
    ProductsGallery,
    ProductCategoies,
    SellingPrice,
    Advance,
    NgClass,
  ],
  templateUrl: "./add-product.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./add-product.scss",
})
export class AddProduct {
  public stepsData = AddProducts;
  public activeSteps!: number;

  ngOnInit() {
    const data = AddProducts.filter((data) => {
      return data.stepNumber === 1;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
