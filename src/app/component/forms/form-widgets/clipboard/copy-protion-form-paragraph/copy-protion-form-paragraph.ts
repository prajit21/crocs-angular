import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-copy-protion-form-paragraph",
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: "./copy-protion-form-paragraph.html",
  styleUrl: "./copy-protion-form-paragraph.scss",
})
export class CopyProtionFormParagraph {
  private _clipboardService = inject(ClipboardService);

  public copyHighlightTxt: string =
    "Web design is the process of creating websites";
  public basic = false;
  public copyText: string = "";

  callServiceToCopy() {
    this._clipboardService.copy(
      "This is copy thru service copyFromContent directly",
    );
  }

  onCopyFailure() {
    alert("copy fail!");
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied");
  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert("copy success!");
      }
    });
  }
}
