import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-form-vaildation",
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  templateUrl: "./form-vaildation.html",
  styleUrl: "./form-vaildation.scss",
})
export class FormVaildation {
  public validate: boolean = false;

  public myForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    zip: new FormControl("", Validators.required),
    payment: new FormControl("", Validators.required),
    theme: new FormControl("", Validators.required),
    file: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    terms: new FormControl("", Validators.requiredTrue),
  });

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      window.location.reload();
    }
  }

  get firstName() {
    return this.myForm.get("firstName");
  }

  get password() {
    return this.myForm.get("password");
  }

  get state() {
    return this.myForm.get("state");
  }

  get city() {
    return this.myForm.get("city");
  }

  get zip() {
    return this.myForm.get("zip");
  }

  get payment() {
    return this.myForm.get("payment");
  }

  get theme() {
    return this.myForm.get("theme");
  }

  get file() {
    return this.myForm.get("file");
  }

  get description() {
    return this.myForm.get("description");
  }

  get terms() {
    return this.myForm.get("terms");
  }
}
