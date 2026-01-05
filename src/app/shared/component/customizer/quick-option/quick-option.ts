import { Component } from "@angular/core";

import { LayoutType } from "./layout-type/layout-type";
import { SidebarIcon } from "./sidebar-icon/sidebar-icon";
import { SidebarType } from "./sidebar-type/sidebar-type";

@Component({
  selector: "app-quick-option",
  imports: [LayoutType, SidebarType, SidebarIcon],
  templateUrl: "./quick-option.html",
  styleUrl: "./quick-option.scss",
})
export class QuickOption {}
