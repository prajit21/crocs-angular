import { CommonModule } from "@angular/common";
import { Component, inject, output } from "@angular/core";

import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { letterBoxDetails } from "../../../../shared/data/email/letter-box";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";
import { AddLable } from "../modal/add-lable/add-lable";
import { ComposeMail } from "../modal/compose-mail/compose-mail";

@Component({
  selector: "app-letter-box-sidebar",
  imports: [CommonModule, NgbModule, ClickOutsideDirective],
  templateUrl: "./letter-box-sidebar.html",
  styleUrl: "./letter-box-sidebar.scss",
})
export class LetterBoxSidebar {
  private modal = inject(NgbModal);

  readonly activeTabValue = output<string>();

  public letterBoxDetails = letterBoxDetails;
  public activeTab: string = "inbox";
  public isOpen: boolean = false;

  constructor() {
    let badgeText: number;
    this.letterBoxDetails.filter((data) => {
      if (data.value == "inbox" || data.value == "starred") {
        badgeText = data.details.length;
        if (badgeText != 0) {
          data.badge = true;
          data.badgeText = badgeText;
        } else {
          data.badge = false;
        }
      }
    });
  }

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }

  openModal(value: string) {
    if (value == "compose") {
      this.modal.open(ComposeMail, { size: "lg" });
    } else if (value == "label") {
      this.modal.open(AddLable, { size: "lg" });
    }
  }
}
