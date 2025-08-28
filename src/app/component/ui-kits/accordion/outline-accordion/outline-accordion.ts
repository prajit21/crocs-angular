import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { OutlineAccordions } from "../../../../shared/data/ui-kits/accordion";

@Component({
  selector: "app-outline-accordion",
  imports: [Feathericon, NgbModule, FormsModule],
  templateUrl: "./outline-accordion.html",
  styleUrl: "./outline-accordion.scss",
})
export class OutlineAccordion {
  public OutlineAccordionData = OutlineAccordions;
}
