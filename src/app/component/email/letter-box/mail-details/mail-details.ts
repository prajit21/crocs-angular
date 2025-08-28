import { Component, Input, output } from "@angular/core";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { UserFooter } from "./user-footer/user-footer";
import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-mail-details",
  imports: [NgbModule, AngularEditorModule, Feathericon, UserFooter, NgbModule],
  templateUrl: "./mail-details.html",
  styleUrl: "./mail-details.scss",
})
export class MailDetails {
  @Input() isShowMail: boolean;
  readonly showMail = output<boolean>();

  public favorites: boolean = false;

  openMailBox() {
    this.isShowMail = false;
    this.showMail.emit(this.isShowMail);
  }

  favorite() {
    this.favorites = !this.favorites;
  }
}
