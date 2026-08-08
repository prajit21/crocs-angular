import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AngularEditorModule } from "@kolkov/angular-editor";

@Component({
  selector: "app-user-footer",
  imports: [AngularEditorModule],
  templateUrl: "./user-footer.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./user-footer.scss",
})
export class UserFooter {}
