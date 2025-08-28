import { CommonModule } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";

import { LayoutService } from "../../services/layout.service";
import { Menu, NavmenuService } from "../../services/navmenu.service";
import { Feathericon } from "../feathericon/feathericon";
import { SvgIcon } from "../svg-icon/svg-icon";

@Component({
  selector: "app-sidebar",
  imports: [
    CommonModule,
    NgbModule,
    Feathericon,
    SvgIcon,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: "./sidebar.html",
  styleUrl: "./sidebar.scss",
})
export class Sidebar {
  private router = inject(Router);
  navServices = inject(NavmenuService);
  layout = inject(LayoutService);

  public menuItems = this.navServices.MENUITEMS;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;
  public margin: number = 0;
  public width: number = window.innerWidth;
  public screenWidth: number;
  public screenHeight: number;
  public pined: boolean = false;
  public pinedItem: string[] = [];

  constructor() {
    this.navServices.item.subscribe((menuItems: Menu[]) => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter((items) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems: Menu) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  setNavActive(item: Menu) {
    this.menuItems.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          } else {
            submenuItems.active = false;
          }
        });
      }
    });
  }

  toggleMenu(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((a: Menu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children?.forEach((b: Menu) => {
          b.active = false;
        });
        return;
      });
    }
    item.active = !item.active;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: number } }) {
    this.width = event.target.innerWidth - 500;
  }

  // // For Horizontal Menu

  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -3500) {
      this.margin = -3000;
      this.leftArrowNone = false;
      this.rightArrowNone = true;
    } else {
      this.margin += -this.width;
      this.leftArrowNone = false;
    }
  }

  //pinned//

  isPined(itemname: string | undefined) {
    return itemname !== undefined && this.pinedItem.includes(itemname);
  }

  togglePined(title: string): void {
    const index = this.pinedItem.indexOf(title);
    if (index !== -1) {
      this.pinedItem.splice(index, 1);
    } else {
      this.pinedItem.push(title);
    }
    if (this.pinedItem.length <= 0) {
      this.pined = false;
    } else {
      this.pined = true;
    }
  }

  openMenu() {
    this.navServices.closeSidebar = !this.navServices.closeSidebar;
  }
}
