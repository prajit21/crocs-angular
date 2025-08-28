import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgxEditorModule, Editor } from "ngx-editor";

@Component({
  selector: "app-ngx-editor",
  imports: [NgxEditorModule, FormsModule],
  templateUrl: "./ngx-editor.html",
  styleUrl: "./ngx-editor.scss",
})
export class NgxEditor {
  editor: Editor;
  html = "";

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
