import { Component } from "@angular/core";

import { CheckboxButtonGroup } from "./checkbox-button-group/checkbox-button-group";
import { CommonButtonGroup } from "./common-button-group/common-button-group";
import { CommonOutlineButtonGroup } from "./common-outline-button-group/common-outline-button-group";
import { Nesting } from "./nesting/nesting";
import { OutlineCustomButtonGroup } from "./outline-custom-button-group/outline-custom-button-group";
import { RadioButtonGroup } from "./radio-button-group/radio-button-group";
import { Vertical } from "./vertical/vertical";

@Component({
  selector: "app-button-group",
  imports: [
    CommonButtonGroup,
    CommonOutlineButtonGroup,
    OutlineCustomButtonGroup,
    RadioButtonGroup,
    CheckboxButtonGroup,
    Nesting,
    Vertical,
  ],
  templateUrl: "./button-group.html",
  styleUrl: "./button-group.scss",
})
export class ButtonGroup {}
