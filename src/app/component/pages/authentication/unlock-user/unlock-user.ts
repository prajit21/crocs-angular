import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-unlock-user",
  imports: [RouterModule],
  templateUrl: "./unlock-user.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./unlock-user.scss",
})
export class UnlockUser {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
