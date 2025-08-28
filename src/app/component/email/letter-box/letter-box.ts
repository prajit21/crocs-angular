import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LetterBoxHeader } from "./letter-box-header/letter-box-header";
import { LetterBoxMail } from "./letter-box-mail/letter-box-mail";
import { LetterBoxSidebar } from "./letter-box-sidebar/letter-box-sidebar";
import { MailDetails } from "./mail-details/mail-details";

@Component({
  selector: "app-letter-box",
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    LetterBoxSidebar,
    LetterBoxMail,
    LetterBoxHeader,
    MailDetails,
  ],
  templateUrl: "./letter-box.html",
  styleUrl: "./letter-box.scss",
})
export class LetterBox {
  public activeTab: string = "inbox";
  public isShowMail: boolean = false;

  getTabValue(value: string) {
    this.activeTab = value;
  }

  showMail(value: boolean) {
    this.isShowMail = value;
  }
}
