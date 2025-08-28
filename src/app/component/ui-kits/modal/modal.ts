import { Component } from "@angular/core";

import { CenteredModal } from "./centered-modal/centered-modal";
import { CustomModals } from "./custom-modals/custom-modals";
import { FullscreenModal } from "./fullscreen-modal/fullscreen-modal";
import { StaticBackdropModal } from "./static-backdrop-modal/static-backdrop-modal";
import { ToggleBetweenModals } from "./toggle-between-modals/toggle-between-modals";
import { BasicModal } from "../modal/basic-modal/basic-modal";
import { SizesModal } from "../modal/sizes-modal/sizes-modal";

@Component({
  selector: "app-modal",
  imports: [
    BasicModal,
    SizesModal,
    FullscreenModal,
    CenteredModal,
    StaticBackdropModal,
    ToggleBetweenModals,
    CustomModals,
  ],
  templateUrl: "./modal.html",
  styleUrl: "./modal.scss",
})
export class Modal {}
