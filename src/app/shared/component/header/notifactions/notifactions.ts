import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-notifactions",
  imports: [RouterModule, CommonModule],
  templateUrl: "./notifactions.html",
  styleUrl: "./notifactions.scss",
})
export class Notifactions {
  public notifications: boolean = false;

  notification() {
    this.notifications = !this.notifications;
  }
}
