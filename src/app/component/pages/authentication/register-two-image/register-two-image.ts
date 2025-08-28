import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonRegisterFrom } from "../common-register-from/common-register-from";

@Component({
  selector: "app-register-two-image",
  imports: [CommonRegisterFrom, RouterModule],
  templateUrl: "./register-two-image.html",
  styleUrl: "./register-two-image.scss",
})
export class RegisterTwoImage {}
