import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-message",
  imports: [RouterModule, Feathericon],
  templateUrl: "./message.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./message.scss",
})
export class Message {
  public messages: boolean = false;

  message() {
    this.messages != this.messages;
  }
}
