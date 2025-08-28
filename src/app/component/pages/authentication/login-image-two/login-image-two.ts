import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginFrom } from "../common-login-from/common-login-from";

@Component({
  selector: "app-login-image-two",
  imports: [CommonLoginFrom, RouterModule, CommonModule],
  templateUrl: "./login-image-two.html",
  styleUrl: "./login-image-two.scss",
})
export class LoginImageTwo {}
