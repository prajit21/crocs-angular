import { Component, ChangeDetectionStrategy } from "@angular/core";

import { userDetailsData } from "../../../../../shared/data/ui-kits/tab";

@Component({
  selector: "app-user-details",
  imports: [],
  templateUrl: "./user-details.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./user-details.scss",
})
export class UserDetails {
  public userDetailsData = userDetailsData;
}
