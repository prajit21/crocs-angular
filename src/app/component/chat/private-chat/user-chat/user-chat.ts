import { Component, inject, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Chats, chatDetails, msgdata } from "../../../../shared/data/chat/chat";
import { ChatService } from "../../../../shared/services/chat.service";

@Component({
  selector: "app-user-chat",
  imports: [FormsModule],
  templateUrl: "./user-chat.html",
  styleUrl: "./user-chat.scss",
})
export class UserChat {
  chatService = inject(ChatService);

  readonly activeTab = input<number>();

  public privateData = Chats;
  public privatchat: chatDetails;
  public chats: msgdata[];
  public isOpen: boolean = false;
  public newMessage = "";

  ngOnChanges() {
    this.privateData.filter((data) => {
      if (data.id == this.activeTab()) {
        this.privatchat = data;
        if (data.msg) {
          this.chats = data.msg;
        }
      }
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = "";
    }
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
