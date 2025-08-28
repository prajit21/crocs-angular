import { Component, inject } from "@angular/core";

import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-clipboard-on-paragraph",
  imports: [],
  templateUrl: "./clipboard-on-paragraph.html",
  styleUrl: "./clipboard-on-paragraph.scss",
})
export class ClipboardOnParagraph {
  private _clipboardService = inject(ClipboardService);

  public paragraphData =
    "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed.";
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
