import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-clipboard-on-text-input",
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: "./clipboard-on-text-input.html",
  styleUrl: "./clipboard-on-text-input.scss",
})
export class ClipboardOnTextInput {
  private _clipboardService = inject(ClipboardService);

  public clipboardExample1: string = "";
  public basic = false;
  public copyText: string = "";

  callServiceToCopy() {
    this._clipboardService.copy(
      "This is copy thru service copyFromContent directly",
    );
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied");
  }
  cutFunction(data: string) {
    switch (data) {
      case "clipboardExample1":
        navigator.clipboard.writeText(this.clipboardExample1);
        this.clipboardExample1 = "";
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert("copy success!");
      }
    });
  }
}
