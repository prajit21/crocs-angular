import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ExtraLarge } from "./extra-large/extra-large";
import { FullScreen } from "./full-screen/full-screen";
import { LargeSize } from "./large-size/large-size";
import { SmallModal } from "./small-modal/small-modal";

@Component({
  selector: "app-sizes-modal",
  imports: [],
  templateUrl: "./sizes-modal.html",
  styleUrl: "./sizes-modal.scss",
})
export class SizesModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == "full") {
      this.modal.open(FullScreen, { fullscreen: true });
    } else if (value == "xl") {
      this.modal.open(ExtraLarge, { size: "xl" });
    } else if (value == "lg") {
      this.modal.open(LargeSize, { size: "lg" });
    } else if (value == "sm") {
      this.modal.open(SmallModal, { size: "sm" });
    }
  }
}
