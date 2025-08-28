import { CommonModule } from "@angular/common";
import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ContactDetails } from "./contact-details/contact-details";
import { Chats, Contacts, chatDetails } from "../../../shared/data/chat/chat";
import { ChatService } from "../../../shared/services/chat.service";

@Component({
  selector: "app-contact-chat-tab",
  imports: [CommonModule, NgbModule, FormsModule, ContactDetails],
  templateUrl: "./contact-chat-tab.html",
  styleUrl: "./contact-chat-tab.scss",
})
export class ContactChatTab {
  chatService = inject(ChatService);

  readonly activeTabValue = output<number>();

  public activeTab?: number;
  public active = 1;
  public privateData = Chats;
  public contactsData = Contacts;
  public openid: number;
  public isOpen: boolean = false;
  public searchResult: boolean = false;
  public searchTerm: string = "";
  public filteredMessages: chatDetails[] = [];
  public chatdata: chatDetails;

  constructor() {
    this.privateData = Chats;
  }

  ngOnInit() {
    this.privateData.forEach((data) => {
      if (data.active) {
        this.activeTabValue.emit(data.id!);
      }
    });
  }

  openMenu(id: number) {
    this.contactsData.filter((da) => {
      if (da.id == id) {
        this.openid = id;
        this.isOpen = !this.isOpen;
      }
    });
  }

  changeDetails(value: number) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab!);
    this.chatService.setActiveUser(value);
  }

  search() {
    if (this.searchTerm.trim() !== "") {
      this.searchResult = true;
      this.filteredMessages = this.privateData.filter((message) =>
        message.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    } else {
      this.searchResult = false;
    }
  }
}
