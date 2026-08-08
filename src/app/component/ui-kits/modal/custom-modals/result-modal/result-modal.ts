import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-result-modal",
  imports: [],
  templateUrl: "./result-modal.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./result-modal.scss",
})
export class ResultModal {
  private modalService = inject(NgbModal);

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    this.modalService.open(resultcontant, { centered: true });
  }
}
