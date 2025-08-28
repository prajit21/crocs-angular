import { Component } from "@angular/core";

import { defaultswitch } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-default-switches",
  imports: [],
  templateUrl: "./default-switches.html",
  styleUrl: "./default-switches.scss",
})
export class DefaultSwitches {
  public switches = defaultswitch;
}
