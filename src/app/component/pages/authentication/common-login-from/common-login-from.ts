import { Component, input, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-common-login-from",
  imports: [RouterModule, Feathericon],
  templateUrl: "./common-login-from.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-login-from.scss",
})
export class CommonLoginFrom {
  public show: boolean = false;

  readonly title = input<boolean>(true);
  readonly forgetpassword = input<boolean>(true);

  showPassword() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
