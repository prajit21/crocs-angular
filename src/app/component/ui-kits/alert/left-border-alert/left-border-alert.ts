import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-left-border-alert",
  imports: [Feathericon, NgClass],
  templateUrl: "./left-border-alert.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./left-border-alert.scss",
})
export class LeftBorderAlert {
  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }
}
