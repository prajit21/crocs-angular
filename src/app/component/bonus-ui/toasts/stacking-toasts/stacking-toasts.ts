import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { StackingToast } from "../../../../shared/data/bonus-ui/toasts";

@Component({
  selector: "app-stacking-toasts",
  imports: [Feathericon],
  templateUrl: "./stacking-toasts.html",
  styleUrl: "./stacking-toasts.scss",
})
export class StackingToasts {
  public stackingData = StackingToast;

  close(value: number) {
    const items = this.stackingData.filter((v) => v.id == value);
    items[0].data = false;
  }
}
