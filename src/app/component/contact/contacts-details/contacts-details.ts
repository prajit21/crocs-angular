import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

import { contact } from "../../../shared/data/contact/contact";
import { contactDetails, contacts } from "../../../shared/interface/contact";
import { ContactHistory } from "../contact-history/contact-history";
import { EditContactDetails } from "../edit-contact-details/edit-contact-details";
import { Print } from "../modal/print/print";

@Component({
  selector: "app-contacts-details",
  imports: [CommonModule, FormsModule, ContactHistory, EditContactDetails],
  templateUrl: "./contacts-details.html",
  styleUrl: "./contacts-details.scss",
})
export class ContactsDetails {
  private modal = inject(NgbModal);

  readonly activeTab = input<string>();

  public contact = contact;
  public contactDetails: contactDetails[];
  public editContactDetails: contactDetails;
  public contactData: contacts;
  public contactTitle: string;

  public edit: boolean = false;
  public history: boolean = false;

  ngOnChanges() {
    this.contact.filter((data) => {
      if (data.value == this.activeTab()) {
        if (data.data) {
          this.contactTitle = data.title;
          this.contactDetails = data.data;
          this.contactData = data;
        }
      }
    });
  }

  changeDetails(details: contactDetails) {
    this.editContactDetails = details;
    if (!details.active) {
      this.contact.filter((data) => {
        data.data?.forEach((subData) => {
          if (data.data?.includes(details)) {
            subData.active = false;
          }
        });
      });
      details.active = !details.active;
    }
  }

  deleteContact(value: contactDetails, index: number) {
    Swal.fire({
      text: "This contact will be deleted from your Personal Contacts and from the chat list too.",
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#EFEFEE !important",
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
        this.contactDetails.splice(this.contactDetails.indexOf(value), 1);
        if (index == this.contactDetails.length) {
          if (this.contactDetails.length > 0) {
            this.contactDetails[0].active = true;
          }
        }
        if (this.contactDetails.length != index) {
          this.contactDetails[index].active = true;
        }
      } else {
        Swal.fire("", "Your contact is safe!");
      }
    });
  }

  editForm(details: contactDetails) {
    this.edit = true;
    this.editContactDetails = details;
  }

  editValue(value: boolean) {
    this.edit = value;
  }

  openHistory() {
    this.history = !this.history;
  }

  getHistory(value: boolean) {
    this.history = value;
  }

  printContact(details: contactDetails) {
    const print = this.modal.open(Print, {
      size: "m",
      centered: true,
      windowClass: "modal-bookmark",
    });
    print.componentInstance.printDetails = details;
  }
}
