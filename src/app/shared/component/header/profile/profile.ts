import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-profile",
  imports: [CommonModule, Feathericon, RouterModule],
  templateUrl: "./profile.html",
  styleUrl: "./profile.scss",
})
export class Profile {
  private router = inject(Router);

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
