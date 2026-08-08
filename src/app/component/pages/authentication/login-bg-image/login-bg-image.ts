import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginFrom } from "../common-login-from/common-login-from";

@Component({
  selector: "app-login-bg-image",
  imports: [CommonLoginFrom, RouterModule],
  templateUrl: "./login-bg-image.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./login-bg-image.scss",
})
export class LoginBgImage {}
