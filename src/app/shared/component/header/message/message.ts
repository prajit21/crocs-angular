import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-message",
  imports: [RouterModule, CommonModule, Feathericon],
  templateUrl: "./message.html",
  styleUrl: "./message.scss",
})
export class Message {
  public messages: boolean = false;

  message() {
    this.messages != this.messages;
  }
}
