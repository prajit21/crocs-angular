import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-simple",
  imports: [Feathericon],
  templateUrl: "./simple.html",
  styleUrl: "./simple.scss",
})
export class Simple {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
