import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonRegisterFrom } from "../common-register-from/common-register-from";

@Component({
  selector: "app-register-bg-image",
  imports: [CommonRegisterFrom, RouterModule],
  templateUrl: "./register-bg-image.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./register-bg-image.scss",
})
export class RegisterBgImage {}
