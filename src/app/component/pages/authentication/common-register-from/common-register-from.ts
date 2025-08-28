import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-common-register-from",
  imports: [RouterModule, Feathericon],
  templateUrl: "./common-register-from.html",
  styleUrl: "./common-register-from.scss",
})
export class CommonRegisterFrom {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
