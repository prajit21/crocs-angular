import { Component, inject } from "@angular/core";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-compose-mail",
  imports: [AngularEditorModule],
  templateUrl: "./compose-mail.html",
  styleUrl: "./compose-mail.scss",
})
export class ComposeMail {
  private modal = inject(NgbActiveModal);

  public htmlContent = "";
  public isOpenCC: boolean = false;
  public isOpenBCC: boolean = false;

  addField(value: string) {
    if (value == "cc") {
      this.isOpenCC = !this.isOpenCC;
    } else if ((value = "Bcc")) {
      this.isOpenBCC = !this.isOpenBCC;
    }
  }

  closeModal() {
    this.modal.close();
  }
}
