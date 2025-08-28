import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import { ModalData } from "../../../../../shared/data/ui-kits/modal";

@Component({
  selector: "app-scrolling-content",
  imports: [Feathericon],
  templateUrl: "./scrolling-content.html",
  styleUrl: "./scrolling-content.scss",
})
export class ScrollingContent {
  private modal = inject(NgbActiveModal);

  public scrollData = ModalData;

  closeModal() {
    this.modal.close();
  }
}
