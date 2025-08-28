import { CommonModule } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HideNavScrollService } from "../../../services/hide-nav-scroll.service";
import { LayoutService } from "../../../services/layout.service";
import { NavmenuService } from "../../../services/navmenu.service";
import { Breadcrumb } from "../../breadcrumb/breadcrumb";
import { Customizer } from "../../customizer/customizer";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { Sidebar } from "../../sidebar/sidebar";

@Component({
  selector: "app-content",
  imports: [
    CommonModule,
    Header,
    Sidebar,
    Breadcrumb,
    RouterOutlet,
    Footer,
    Customizer,
  ],
  templateUrl: "./content.html",
  styleUrl: "./content.scss",
})
export class Content {
  layout = inject(LayoutService);
  navmenu = inject(NavmenuService);
  hidenav = inject(HideNavScrollService);

  constructor() {
    const navmenu = this.navmenu;

    if (window.innerWidth < 1185) {
      navmenu.closeSidebar = true;
    }

    if (window.innerWidth <= 992) {
      this.layout.config.settings.sidebar_type = "compact-wrapper";
    } else {
      this.layout.config.settings.sidebar_type =
        this.layout.config.settings.sidebar_type;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (window.innerWidth < 1185) {
      this.navmenu.closeSidebar = true;
    } else {
      this.navmenu.closeSidebar = false;
    }

    if (window.innerWidth <= 992) {
      this.layout.config.settings.sidebar_type = "compact-wrapper";
    } else {
      this.layout.config.settings.sidebar_type =
        this.layout.config.settings.sidebar_type;
    }
  }
}
