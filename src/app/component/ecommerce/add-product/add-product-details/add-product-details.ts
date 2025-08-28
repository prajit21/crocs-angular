import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-product-details",
  imports: [
    CommonModule,
    AngularEditorModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: "./add-product-details.html",
  styleUrl: "./add-product-details.scss",
})
export class AddProductDetails {
  public validate: boolean = false;
  public activeStep: number = 1;
  public htmlContent = "";

  readonly activeSteps = output<number>();

  myForm = new FormGroup({
    productTitle: new FormControl("", Validators.required),
    htmlContent: new FormControl(),
  });

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.myForm.get("productTitle");
  }
}
