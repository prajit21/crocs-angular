import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonRegisterFrom } from "../common-register-from/common-register-from";

@Component({
  selector: "app-register-simple",
  imports: [CommonRegisterFrom, RouterModule],
  templateUrl: "./register-simple.html",
  styleUrl: "./register-simple.scss",
})
export class RegisterSimple {}
