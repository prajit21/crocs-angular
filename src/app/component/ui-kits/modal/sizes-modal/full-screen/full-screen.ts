import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-full-screen",
  imports: [Feathericon],
  templateUrl: "./full-screen.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./full-screen.scss",
})
export class FullScreen {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
