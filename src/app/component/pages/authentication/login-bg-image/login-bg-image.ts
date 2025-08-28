import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginFrom } from "../common-login-from/common-login-from";

@Component({
  selector: "app-login-bg-image",
  imports: [CommonLoginFrom, RouterModule, CommonModule],
  templateUrl: "./login-bg-image.html",
  styleUrl: "./login-bg-image.scss",
})
export class LoginBgImage {}
