import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { letterBoxDetails } from "../../../../shared/data/email/letter-box";
import { mailDetails } from "../../../../shared/interface/letter-box";

@Component({
  selector: "app-letter-box-mail",
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: "./letter-box-mail.html",
  styleUrl: "./letter-box-mail.scss",
})
export class LetterBoxMail {
  readonly activeTab = input<string>();

  readonly showMail = output<boolean>();

  public letterBoxDetails = letterBoxDetails;
  public mailDetails: mailDetails[] = [];
  public favMail: mailDetails[] = [];
  public mailLength: number;
  public isShowMail: boolean = false;
  public pageSize = 8;
  public currentPage = 1;

  constructor() {}

  ngOnInit() {
    this.letterBoxDetails.forEach((data) => {
      data.details.forEach((subData) => {
        if (subData.favorite) {
          if (!this.favMail.includes(subData)) {
            this.favMail.push(subData);
          }
        }
      });
    });

    this.letterBoxDetails.forEach((data) => {
      if (data.value == "starred") {
        data.details = this.favMail;
        if (this.favMail.length != 0) {
          data.badge = true;
          data.badgeText = this.favMail.length;
        }
      }
    });
  }

  ngOnChanges() {
    this.letterBoxDetails.filter((data) => {
      const activeTab = this.activeTab();
      if (data.value == activeTab) {
        this.mailDetails = data.details;
      }
      if (data.value && activeTab == "starred") {
        if (data.value == "starred") {
          data.details = this.favMail;
        }
      }
    });
  }

  favoriteMail(value: mailDetails) {
    this.mailDetails.forEach((data) => {
      if (data.id == value.id) {
        value.favorite = !value.favorite;
        if (value.favorite) {
          this.favMail.push(value);
        } else {
          this.favMail.splice(this.favMail.indexOf(value), 1);
        }
      }
    });

    this.letterBoxDetails.forEach((data) => {
      if (data.value == "starred") {
        if (this.favMail.length != 0) {
          data.badge = true;
          data.badgeText = this.favMail.length;
        } else if (this.favMail.length == 0) {
          data.badgeText = 0;
        }
      }
    });
  }

  mailToggle(value: mailDetails) {
    this.mailDetails.forEach((data) => {
      if (data.id == value.id) {
        data.mailOpen = !data.mailOpen;
      }
    });
  }

  removeMail(value: mailDetails) {
    this.mailDetails.forEach((data) => {
      if (this.activeTab() == "inbox") {
        if (data.id == value.id) {
          this.mailDetails.splice(this.mailDetails.indexOf(value), 1);
          this.mailLength = this.mailDetails.length;
          if (value.favorite) {
            this.favMail.splice(this.favMail.indexOf(value), 1);
          }
        }
      }
    });

    this.letterBoxDetails.filter((data) => {
      if (data.value == "inbox") {
        data.badgeText = this.mailLength;
        if (this.mailLength == 0) {
          data.badgeText = 0;
        }
      } else if (data.value == "starred") {
        if (this.favMail.length != 0) {
          data.badge = true;
          data.badgeText = this.favMail.length;
        } else if (this.favMail.length == 0) {
          data.badgeText = 0;
        }
      }
    });
  }

  showMailDetails() {
    this.isShowMail = true;
    this.showMail.emit(this.isShowMail);
  }
}
