import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ContextualClass } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-contextual-classes",
  imports: [],
  templateUrl: "./contextual-classes.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./contextual-classes.scss",
})
export class ContextualClasses {
  public contextualData = ContextualClass;
}
