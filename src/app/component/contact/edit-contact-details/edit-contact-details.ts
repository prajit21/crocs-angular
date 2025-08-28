import { CommonModule } from "@angular/common";
import { Component, Input, output } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { contactDetails } from "../../../shared/interface/contact";

@Component({
  selector: "app-edit-contact-details",
  imports: [CommonModule, NgbModule],
  templateUrl: "./edit-contact-details.html",
  styleUrl: "./edit-contact-details.scss",
})
export class EditContactDetails {
  @Input() editContactDetails: contactDetails;

  readonly editValue = output<boolean>();

  public editMore: boolean = false;
  public details: boolean = false;

  editMoreInfo() {
    this.editMore = true;
  }

  showDetails() {
    this.details = false;
    this.editMore = false;
    this.editValue.emit(this.details);
  }
}
