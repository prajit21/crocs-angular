import { Component, TemplateRef, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile-modal",
  imports: [RouterModule],
  templateUrl: "./profile-modal.html",
  styleUrl: "./profile-modal.scss",
})
export class ProfileModal {
  private modalService = inject(NgbModal);

  profilemodal(profilecontant: TemplateRef<NgbModal>) {
    this.modalService.open(profilecontant, { centered: true });
  }
}
