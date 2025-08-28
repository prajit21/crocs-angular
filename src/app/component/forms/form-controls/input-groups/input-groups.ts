import { Component } from "@angular/core";

import { BasicInputGroups } from "./basic-input-groups/basic-input-groups";
import { ButtonAddons } from "./button-addons/button-addons";
import { ButtonsWithDropdowns } from "./buttons-with-dropdowns/buttons-with-dropdowns";
import { CustomFileInput } from "./custom-file-input/custom-file-input";
import { CustomForms } from "./custom-forms/custom-forms";
import { InputCheckboxesRadios } from "./input-checkboxes-radios/input-checkboxes-radios";
import { InputSizing } from "./input-sizing/input-sizing";
import { MultipleInputs } from "./multiple-inputs/multiple-inputs";
import { SegmentedButtons } from "./segmented-buttons/segmented-buttons";
import { VariationOfAddons } from "./variation-of-addons/variation-of-addons";

@Component({
  selector: "app-input-groups",
  imports: [
    BasicInputGroups,
    ButtonAddons,
    ButtonsWithDropdowns,
    CustomForms,
    CustomFileInput,
    InputCheckboxesRadios,
    InputSizing,
    MultipleInputs,
    SegmentedButtons,
    VariationOfAddons,
  ],
  templateUrl: "./input-groups.html",
  styleUrl: "./input-groups.scss",
})
export class InputGroups {}
