import { CommonModule } from "@angular/common";
import { Component, inject, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TagInputModule } from "ngx-chips";

import { NewCategories } from "./new-categories/new-categories";

@Component({
  selector: "app-product-categoies",
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TagInputModule],
  templateUrl: "./product-categoies.html",
  styleUrl: "./product-categoies.scss",
})
export class ProductCategoies {
  private modalService = inject(NgbModal);

  readonly activeSteps = output<number>();

  public items = [];
  public activeStep: number = 3;
  public validate: boolean;
  public htmlContent = "";

  myForm = new FormGroup({
    product: new FormControl("", Validators.required),
    productStatus: new FormControl("", Validators.required),
    addTag: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
  });

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get product() {
    return this.myForm.get("product");
  }

  get addTag() {
    return this.myForm.get("addTag");
  }

  get date() {
    return this.myForm.get("date");
  }

  get productStatus() {
    return this.myForm.get("productStatus");
  }

  newCategories() {
    this.modalService.open(NewCategories, { size: "lg" });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
