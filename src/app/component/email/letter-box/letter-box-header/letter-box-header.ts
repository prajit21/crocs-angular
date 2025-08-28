import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SvgIcon } from "../../../../shared/component/svg-icon/svg-icon";
import { letterBoxHeaderTab } from "../../../../shared/data/email/letter-box";

@Component({
  selector: "app-letter-box-header",
  imports: [CommonModule, NgbModule, FormsModule, SvgIcon],
  templateUrl: "./letter-box-header.html",
  styleUrl: "./letter-box-header.scss",
})
export class LetterBoxHeader {
  public letterBoxHeaderTab = letterBoxHeaderTab;
  public activeTab: string = "promotion";
  public isOpen: boolean = false;

  changeTab(value: string) {
    this.activeTab = value;
  }

  open() {
    this.isOpen = !this.isOpen;
  }
}
