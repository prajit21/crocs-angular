import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ContactSidemenu } from "./contact-sidemenu/contact-sidemenu";
import { ContactsDetails } from "./contacts-details/contacts-details";

@Component({
  selector: "app-contact",
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ContactSidemenu,
    ContactsDetails,
  ],
  templateUrl: "./contact.html",
  styleUrl: "./contact.scss",
})
export class Contact {
  public activeTab: string;

  tabValue(value: string) {
    this.activeTab = value;
  }
}
