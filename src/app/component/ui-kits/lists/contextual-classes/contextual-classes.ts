import { Component } from "@angular/core";

import { ContextualClass } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-contextual-classes",
  imports: [],
  templateUrl: "./contextual-classes.html",
  styleUrl: "./contextual-classes.scss",
})
export class ContextualClasses {
  public contextualData = ContextualClass;
}
