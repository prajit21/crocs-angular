import { CommonModule } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Bookmark } from "./bookmark/bookmark";
import { Cart } from "./cart/cart";
import { Language } from "./language/language";
import { Message } from "./message/message";
import { Mode } from "./mode/mode";
import { Notifactions } from "./notifactions/notifactions";
import { Profile } from "./profile/profile";
import { Search } from "./search/search";
import { ClickOutsideDirective } from "../../directive/outside.directive";
import { HideNavScrollService } from "../../services/hide-nav-scroll.service";
import { Menu, NavmenuService } from "../../services/navmenu.service";
import { SvgIcon } from "../svg-icon/svg-icon";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    Search,
    Bookmark,
    Mode,
    Cart,
    Profile,
    Language,
    Message,
    Notifactions,
    SvgIcon,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ClickOutsideDirective,
  ],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  hidenav = inject(HideNavScrollService);
  navmenu = inject(NavmenuService);

  public menuItems: Menu[] = [];
  public item: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public open = false;
  public text: string = "";

  constructor() {
    this.navmenu.item.subscribe((menuItems: Menu[]) => (this.item = menuItems));
  }

  openMenu() {
    this.navmenu.closeSidebar = !this.navmenu.closeSidebar;
  }

  @HostListener("window:resize", ["$event"])
  onResize(_event: number) {
    this.navmenu.closeSidebar = window.innerWidth < 1200 ? true : false;
  }

  openSearch() {
    this.open = !this.open;
    this.searchResult = false;
  }

  languageToggle() {
    this.navmenu.language = !this.navmenu.language;
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.item.forEach((data) => {
      if (data.title?.toLowerCase().includes(term) && data.type === "link") {
        items.push(data);
      }
      data.children?.filter((subItems) => {
        if (
          subItems.title?.toLowerCase().includes(term) &&
          subItems.type === "link"
        ) {
          subItems.icon = data.icon;
          items.push(subItems);
        }
        subItems.children?.filter((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = data.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
    });
    return;
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add("offcanvas");
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.body.classList.remove("offcanvas");
  }

  clickOutside(): void {
    this.open = false;
    this.searchResult = false;
    this.searchResultEmpty = false;
  }
}
