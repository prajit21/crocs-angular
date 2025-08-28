import { Component } from "@angular/core";

import { descriptionData } from "../../../../../shared/data/ui-kits/tab";

@Component({
  selector: "app-description",
  imports: [],
  templateUrl: "./description.html",
  styleUrl: "./description.scss",
})
export class Description {
  public descriptionData = descriptionData;
}
