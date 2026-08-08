import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BalanceModal } from "./balance-modal/balance-modal";
import { ProfileModal } from "./profile-modal/profile-modal";
import { ResultModal } from "./result-modal/result-modal";

@Component({
  selector: "app-custom-modals",
  imports: [BalanceModal, ProfileModal, ResultModal],
  templateUrl: "./custom-modals.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./custom-modals.scss",
})
export class CustomModals {}
