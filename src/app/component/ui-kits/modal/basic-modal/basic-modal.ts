import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { OpenModal } from "./open-modal/open-modal";
import { ScrollingContent } from "./scrolling-content/scrolling-content";
import { Simple } from "./simple/simple";
import { TooltipPopovers } from "./tooltip-popovers/tooltip-popovers";

@Component({
  selector: "app-basic-modal",
  imports: [],
  templateUrl: "./basic-modal.html",
  styleUrl: "./basic-modal.scss",
})
export class BasicModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == "simple") {
      this.modal.open(Simple);
    } else if (value == "scrolling") {
      this.modal.open(ScrollingContent);
    } else if (value == "tooltip") {
      this.modal.open(TooltipPopovers, { centered: true });
    } else if (value == "crocs") {
      this.modal.open(OpenModal);
    }
  }
}
