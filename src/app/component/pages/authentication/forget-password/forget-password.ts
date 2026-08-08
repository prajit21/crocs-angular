import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-forget-password",
  imports: [RouterModule],
  templateUrl: "./forget-password.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./forget-password.scss",
})
export class ForgetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
