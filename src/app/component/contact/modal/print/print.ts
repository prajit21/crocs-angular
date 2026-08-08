import {
  Component,
  inject,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { contactDetails } from "../../../../shared/interface/contact";

@Component({
  selector: "app-print",
  imports: [],
  templateUrl: "./print.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./print.scss",
})
export class Print {
  private modal = inject(NgbActiveModal);

  @Input() printDetails: contactDetails;

  closeModal() {
    this.modal.close();
  }
}
