import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-left-border-alert",
  imports: [Feathericon, CommonModule],
  templateUrl: "./left-border-alert.html",
  styleUrl: "./left-border-alert.scss",
})
export class LeftBorderAlert {
  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }
}
