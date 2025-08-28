import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonRegisterFrom } from "../common-register-from/common-register-from";

@Component({
  selector: "app-register-bg-image",
  imports: [CommonRegisterFrom, RouterModule, CommonModule],
  templateUrl: "./register-bg-image.html",
  styleUrl: "./register-bg-image.scss",
})
export class RegisterBgImage {}
