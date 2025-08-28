import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { IconsAccordions } from "../../../../shared/data/ui-kits/accordion";

@Component({
  selector: "app-icons-accordion",
  imports: [Feathericon, NgbModule, FormsModule],
  templateUrl: "./icons-accordion.html",
  styleUrl: "./icons-accordion.scss",
})
export class IconsAccordion {
  public iconaccordionData = IconsAccordions;
}
