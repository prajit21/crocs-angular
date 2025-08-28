import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { friends } from "../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-friends",
  imports: [RouterModule],
  templateUrl: "./friends.html",
  styleUrl: "./friends.scss",
})
export class Friends {
  public friends = friends;
}
