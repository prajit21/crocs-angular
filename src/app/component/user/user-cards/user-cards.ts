import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { userCard } from "../../../shared/data/user/users-card";

@Component({
  selector: "app-user-cards",
  imports: [RouterModule],
  templateUrl: "./user-cards.html",
  styleUrl: "./user-cards.scss",
})
export class UserCards {
  public users = userCard;
}
