import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { simpleAccordion } from "../../../../shared/data/ui-kits/accordion";

@Component({
  selector: "app-simple-accordion",
  imports: [Feathericon, NgbModule, FormsModule],
  templateUrl: "./simple-accordion.html",
  styleUrl: "./simple-accordion.scss",
})
export class SimpleAccordion {
  public simpleAccordionData = simpleAccordion;
}
