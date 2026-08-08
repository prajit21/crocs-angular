import { Component, output, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-contact-history",
  imports: [],
  templateUrl: "./contact-history.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./contact-history.scss",
})
export class ContactHistory {
  readonly history = output<boolean>();

  closeHistory() {
    this.history.emit(false);
  }
}
