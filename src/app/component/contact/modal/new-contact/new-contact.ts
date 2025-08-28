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

import { contact } from "../../../../shared/data/contact/contact";
import { contactDetails, contacts } from "../../../../shared/interface/contact";

@Component({
  selector: "app-new-contact",
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./new-contact.html",
  styleUrl: "./new-contact.scss",
})
export class NewContact {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public contact: contacts[] = contact;
  public ids: number[] = [];
  public maxId: number;

  public myForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    type: new FormControl("mobile", Validators.required),
    img: new FormControl("assets/images/user/user.png"),
    gender: new FormControl("male"),
    dob: new FormControl("5 Jan 2000"),
    personality: new FormControl("Cool"),
    city: new FormControl("Delhi"),
    website: new FormControl("www.abc.com"),
    interest: new FormControl("sports"),
    id: new FormControl(0),
  });

  constructor() {
    this.contact.forEach((data) => {
      data.data?.forEach((subData) => {
        if (data.value == "personal") {
          this.ids.push(subData.id);
          this.maxId = Math.max(...this.ids);
        }
      });
    });

    this.myForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      type: new FormControl("mobile", Validators.required),
      img: new FormControl("assets/images/user/user.png"),
      gender: new FormControl("male"),
      dob: new FormControl("5 Jan 2000"),
      personality: new FormControl("Cool"),
      city: new FormControl("Delhi"),
      website: new FormControl("www.abc.com"),
      interest: new FormControl("sports"),
      id: new FormControl(this.maxId + 1),
    });
  }

  addContact() {
    this.validate = true;
    if (this.myForm.valid) {
      const contactData = this.myForm.value as contactDetails;
      this.contact.filter((data) => {
        if (data.value == "personal") {
          if (data.data?.length == 0) {
            contactData.active = true;
          }
          data.data?.push(contactData);
        }
      });
      this.modal.close();
    }
  }

  closeModal() {
    this.modal.close();
  }

  get firstName() {
    return this.myForm.get("firstName");
  }

  get lastName() {
    return this.myForm.get("lastName");
  }

  get email() {
    return this.myForm.get("email");
  }

  get mobile() {
    return this.myForm.get("mobile");
  }

  get type() {
    return this.myForm.get("type");
  }
}
