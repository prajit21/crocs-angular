import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { contact } from "../../../shared/data/contact/contact";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";
import { Category } from "../modal/category/category";
import { NewContact } from "../modal/new-contact/new-contact";

@Component({
  selector: "app-contact-sidemenu",
  imports: [NgbModule, FormsModule, Feathericon, ClickOutsideDirective],
  templateUrl: "./contact-sidemenu.html",
  styleUrl: "./contact-sidemenu.scss",
})
export class ContactSidemenu {
  private modal = inject(NgbModal);

  readonly activeTabValue = output<string>();

  public contact = contact;
  public activeTab?: string = "personal";
  public isOpen: boolean = false;

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab!);
  }

  changeTab(value?: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab!);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }

  openModal(value: string) {
    if (value == "contact") {
      this.modal.open(NewContact, {
        size: "lg",
        windowClass: "modal-bookmark",
      });
    } else if (value == "category") {
      this.modal.open(Category, { size: "lg", windowClass: "modal-bookmark" });
    }
  }
}
