import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ContactChatTab } from "../contact-chat-tab/contact-chat-tab";
import { UserGroupChat } from "./user-group-chat/user-group-chat";

@Component({
  selector: "app-group-chat",
  imports: [ContactChatTab, UserGroupChat],
  templateUrl: "./group-chat.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./group-chat.scss",
})
export class GroupChat {}
