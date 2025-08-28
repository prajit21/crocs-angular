import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-login-tooltip",
  imports: [RouterModule, CommonModule, NgbModule, Feathericon],
  templateUrl: "./login-tooltip.html",
  styleUrl: "./login-tooltip.scss",
})
export class LoginTooltip {
  public show: boolean = false;

  password() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
