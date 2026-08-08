import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-notifactions",
  imports: [RouterModule],
  templateUrl: "./notifactions.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./notifactions.scss",
})
export class Notifactions {
  public notifications: boolean = false;

  notification() {
    this.notifications = !this.notifications;
  }
}
