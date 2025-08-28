import { Component, TemplateRef, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-balance-modal",
  imports: [Feathericon, RouterModule],
  templateUrl: "./balance-modal.html",
  styleUrl: "./balance-modal.scss",
})
export class BalanceModal {
  private modalService = inject(NgbModal);

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    this.modalService.open(Balancecontant, { centered: true });
  }
}
