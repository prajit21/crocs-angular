import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FullscreenLgModal } from "./fullscreen-lg-modal/fullscreen-lg-modal";
import { FullscreenMdModal } from "./fullscreen-md-modal/fullscreen-md-modal";
import { FullscreenSimpleModal } from "./fullscreen-simple-modal/fullscreen-simple-modal";
import { FullscreenSmModal } from "./fullscreen-sm-modal/fullscreen-sm-modal";
import { FullscreenXlModal } from "./fullscreen-xl-modal/fullscreen-xl-modal";
import { FullscreenXxlModal } from "./fullscreen-xxl-modal/fullscreen-xxl-modal";

@Component({
  selector: "app-fullscreen-modal",
  imports: [],
  templateUrl: "./fullscreen-modal.html",
  styleUrl: "./fullscreen-modal.scss",
})
export class FullscreenModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == "full") {
      this.modal.open(FullscreenSimpleModal, {
        fullscreen: true,
        windowClass: "modal-fullscreen",
      });
    } else if (value == "sm") {
      this.modal.open(FullscreenSmModal, {
        windowClass: "modal-fullscreen-sm-down",
      });
    } else if (value == "md") {
      this.modal.open(FullscreenMdModal, {
        windowClass: "modal-fullscreen-md-down",
      });
    } else if (value == "lg") {
      this.modal.open(FullscreenLgModal, {
        windowClass: "modal-fullscreen-lg-down",
      });
    } else if (value == "xl") {
      this.modal.open(FullscreenXlModal, {
        windowClass: "modal-fullscreen-xl-down",
      });
    } else if (value == "xxl") {
      this.modal.open(FullscreenXxlModal, {
        windowClass: "modal-fullscreen-xxl-down",
      });
    }
  }
}
