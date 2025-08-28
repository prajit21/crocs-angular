import { Component } from "@angular/core";

import { ContextualClasses } from "./contextual-classes/contextual-classes";
import { CustomContentLists } from "./custom-content-lists/custom-content-lists";
import { DisabledLists } from "./disabled-lists/disabled-lists";
import { HorizontalLists } from "./horizontal-lists/horizontal-lists";
import { JavscriptBehavior } from "./javscript-behavior/javscript-behavior";
import { ListsCheckbox } from "./lists-checkbox/lists-checkbox";
import { ListsNumbers } from "./lists-numbers/lists-numbers";
import { ListsRadios } from "./lists-radios/lists-radios";
import { NumberedBadgeLists } from "./numbered-badge-lists/numbered-badge-lists";
import { ScrollableLists } from "./scrollable-lists/scrollable-lists";
import { TopCommonLists } from "./top-common-lists/top-common-lists";

@Component({
  selector: "app-lists",
  imports: [
    TopCommonLists,
    ContextualClasses,
    HorizontalLists,
    CustomContentLists,
    ListsCheckbox,
    ListsRadios,
    ListsNumbers,
    JavscriptBehavior,
    NumberedBadgeLists,
    DisabledLists,
    ScrollableLists,
  ],
  templateUrl: "./lists.html",
  styleUrl: "./lists.scss",
})
export class Lists {}
