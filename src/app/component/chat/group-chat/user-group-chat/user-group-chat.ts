import { Component } from "@angular/core";

import { massage } from "../../../../shared/data/chat/chat";

@Component({
  selector: "app-user-group-chat",
  imports: [],
  templateUrl: "./user-group-chat.html",
  styleUrl: "./user-group-chat.scss",
})
export class UserGroupChat {
  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
