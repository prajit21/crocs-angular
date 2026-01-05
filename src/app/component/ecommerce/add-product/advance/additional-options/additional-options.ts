import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-additional-options",
  imports: [AngularEditorModule, NgbModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./additional-options.html",
  styleUrl: "./additional-options.scss",
})
export class AdditionalOptions {
  public htmlContent = "";

  myForm = new FormGroup({
    title: new FormControl(),
    htmlContent: new FormControl(),
  });
}
