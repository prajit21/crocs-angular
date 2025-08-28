import { Component } from "@angular/core";

import { Alignments } from "./alignments/alignments";
import { BasicDropdown } from "./basic-dropdown/basic-dropdown";
import { DarkDropdown } from "./dark-dropdown/dark-dropdown";
import { DividerDropdown } from "./divider-dropdown/divider-dropdown";
import { DropdownSizing } from "./dropdown-sizing/dropdown-sizing";
import { HeadingDropdown } from "./heading-dropdown/heading-dropdown";
import { HelperCard } from "./helper-card/helper-card";
import { JustifyContents } from "./justify-contents/justify-contents";
import { RoundedDropdown } from "./rounded-dropdown/rounded-dropdown";
import { SplitDropdown } from "./split-dropdown/split-dropdown";
import { UniqueDropdown } from "./unique-dropdown/unique-dropdown";
import { WithInputTypeDropdown } from "./with-input-type-dropdown/with-input-type-dropdown";

@Component({
  selector: "app-dropdown",
  imports: [
    BasicDropdown,
    DarkDropdown,
    HeadingDropdown,
    RoundedDropdown,
    SplitDropdown,
    WithInputTypeDropdown,
    DividerDropdown,
    HelperCard,
    UniqueDropdown,
    Alignments,
    JustifyContents,
    DropdownSizing,
  ],
  templateUrl: "./dropdown.html",
  styleUrl: "./dropdown.scss",
})
export class Dropdown {}
