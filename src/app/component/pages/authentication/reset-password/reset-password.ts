import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-reset-password",
  imports: [RouterModule],
  templateUrl: "./reset-password.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./reset-password.scss",
})
export class ResetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
