import { Component, inject, output } from "@angular/core";

import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { bookmark } from "../../../shared/data/bookmark/bookmarks";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";
import { AddTag } from "../modal/add-tag/add-tag";
import { NewBookmark } from "../modal/new-bookmark/new-bookmark";

@Component({
  selector: "app-bookmark-sidemenu",
  imports: [NgbModule, Feathericon, ClickOutsideDirective],
  templateUrl: "./bookmark-sidemenu.html",
  styleUrl: "./bookmark-sidemenu.scss",
})
export class BookmarkSidemenu {
  private modal = inject(NgbModal);

  readonly activeTabvalue = output<string>();

  public bookmark = bookmark;
  public open: boolean = false;
  public activeTab: string = "created_by_me";

  ngOnInit() {
    this.activeTabvalue.emit(this.activeTab);
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.activeTabvalue.emit(this.activeTab);
  }

  openMenu() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }

  openModal(value: string) {
    if (value == "add_bookmark") {
      this.modal.open(NewBookmark, {
        size: "lg",
        windowClass: "modal-bookmark",
      });
    } else if (value == "add_tag") {
      this.modal.open(AddTag, { size: "lg", windowClass: "modal-bookmark" });
    }
  }
}
