import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { Chats, chatDetails } from "../data/chat/chat";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private activeUserSubject = new BehaviorSubject<chatDetails>(Chats[0]);
  activeUser$ = this.activeUserSubject.asObservable();
  public data = Chats;

  constructor() {}

  setActiveUser(userId: number) {
    const activeUser = this.data.find(
      (user: chatDetails) => user.id === userId,
    );
    if (activeUser) {
      this.activeUserSubject.next(activeUser);
    }
  }

  sendMessage(userText: string) {
    const activeUser = this.activeUserSubject.getValue();
    if (activeUser) {
      activeUser.msg?.push({
        userName: activeUser.name,
        userimg: activeUser.img,
        userTime: new Date().toLocaleTimeString(),
        userText,
      });
      this.activeUserSubject.next(activeUser);

      this.autoReply();
    }
  }

  private autoReply() {
    setTimeout(() => {
      const activeUser = this.activeUserSubject.getValue();
      activeUser.msg?.push({
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: new Date().toLocaleTimeString(),
        otherText: this.generateReplyText(),
        reply: true,
      });
      this.activeUserSubject.next(activeUser);
    }, 1000);
  }

  private generateReplyText(): string {
    const replies = [
      "Ohh... I can't understand what you trying to say. Sorry!",
      "Could you please clarify?",
      "I'm here to help you.",
      "That sounds interesting. Tell me more.",
      "I'm not sure I understand. Could you explain?",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }
}
