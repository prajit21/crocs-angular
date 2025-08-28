import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { Contacts } from "../../../../shared/data/chat/chat";

@Component({
  selector: "app-contact-details",
  imports: [Feathericon],
  templateUrl: "./contact-details.html",
  styleUrl: "./contact-details.scss",
})
export class ContactDetails {
  public contactsData = Contacts;
  public openid: number;
  public isOpen: boolean = false;

  openMenu(id: number) {
    this.contactsData.filter((da) => {
      if (da.id == id) {
        this.openid = id;
        this.isOpen = !this.isOpen;
      }
    });
  }
}
