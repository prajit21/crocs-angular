import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginFrom } from "../common-login-from/common-login-from";

@Component({
  selector: "app-login-simple",
  imports: [CommonLoginFrom, RouterModule],
  templateUrl: "./login-simple.html",
  styleUrl: "./login-simple.scss",
})
export class LoginSimple {}
