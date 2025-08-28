import { Component, inject } from "@angular/core";

import { NgbAccordionConfig, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { questionData } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-questions",
  imports: [NgbModule, Feathericon],
  templateUrl: "./questions.html",
  styleUrl: "./questions.scss",
})
export class Questions {
  public questionData = questionData;

  constructor() {
    const config = inject(NgbAccordionConfig);

    config.closeOthers = true;
  }
}
