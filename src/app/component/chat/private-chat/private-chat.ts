import { Component } from "@angular/core";

import { ContactChatTab } from "../contact-chat-tab/contact-chat-tab";
import { UserChat } from "./user-chat/user-chat";

@Component({
  selector: "app-private-chat",
  imports: [ContactChatTab, UserChat],
  templateUrl: "./private-chat.html",
  styleUrl: "./private-chat.scss",
})
export class PrivateChat {
  public activeTab: number;

  tabValue(value: number) {
    this.activeTab = value;
  }
}
