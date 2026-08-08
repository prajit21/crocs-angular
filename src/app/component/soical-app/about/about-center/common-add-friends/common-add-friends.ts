import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-common-add-friends",
  imports: [],
  templateUrl: "./common-add-friends.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-add-friends.scss",
})
export class CommonAddFriends {
  readonly data = input<data.addFriends>();
}
