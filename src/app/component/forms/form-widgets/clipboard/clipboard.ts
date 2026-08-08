import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ClipboardOnParagraph } from "./clipboard-on-paragraph/clipboard-on-paragraph";
import { ClipboardOnTextInput } from "./clipboard-on-text-input/clipboard-on-text-input";
import { ClipboardOnTextarea } from "./clipboard-on-textarea/clipboard-on-textarea";
import { CopyProtionFormParagraph } from "./copy-protion-form-paragraph/copy-protion-form-paragraph";

@Component({
  selector: "app-clipboard",
  imports: [
    ClipboardOnParagraph,
    ClipboardOnTextarea,
    ClipboardOnTextInput,
    CopyProtionFormParagraph,
  ],
  templateUrl: "./clipboard.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./clipboard.scss",
})
export class Clipboard {}
