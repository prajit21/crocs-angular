import { Component } from "@angular/core";

import {
  BorderedRadio,
  IconsRadio,
  FilledRadio,
} from "../../../../,./../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-custom-radio",
  imports: [],
  templateUrl: "./custom-radio.html",
  styleUrl: "./custom-radio.scss",
})
export class CustomRadio {
  public borderData = BorderedRadio;
  public iconData = IconsRadio;
  public filledData = FilledRadio;
}
