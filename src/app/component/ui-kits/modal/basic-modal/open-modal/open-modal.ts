import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-open-modal",
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  templateUrl: "./open-modal.html",
  styleUrl: "./open-modal.scss",
})
export class OpenModal {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public myForm = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    email: new FormControl("Crocstheme@gmail.com", [
      Validators.required,
      Validators.email,
    ]),
    term: new FormControl(true, Validators.requiredTrue),
  });

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      this.modal.close();
    }
  }

  get fname() {
    return this.myForm.get("fname");
  }

  get lname() {
    return this.myForm.get("lname");
  }

  get email() {
    return this.myForm.get("email");
  }

  get term() {
    return this.myForm.get("term");
  }
}
