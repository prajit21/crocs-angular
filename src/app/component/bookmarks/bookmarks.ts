import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BookmarkDetails } from "./bookmark-details/bookmark-details";
import { BookmarkSidemenu } from "./bookmark-sidemenu/bookmark-sidemenu";

@Component({
  selector: "app-bookmarks",
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    BookmarkSidemenu,
    BookmarkDetails,
    ReactiveFormsModule,
  ],
  templateUrl: "./bookmarks.html",
  styleUrl: "./bookmarks.scss",
})
export class Bookmarks {
  public activeTab: string;

  getTab(value: string) {
    this.activeTab = value;
  }
}
