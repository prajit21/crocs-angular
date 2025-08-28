import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-new-categories",
  imports: [
    CommonModule,
    NgbModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./new-categories.html",
  styleUrl: "./new-categories.scss",
})
export class NewCategories {
  activeModal = inject(NgbActiveModal);

  public htmlContent = "";
}
