import { CommonModule } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";

import { LayoutService } from "../../../../services/layout.service";

@Component({
  selector: "app-sidebar-type",
  imports: [CommonModule],
  templateUrl: "./sidebar-type.html",
  styleUrl: "./sidebar-type.scss",
})
export class SidebarType {
  layout = inject(LayoutService);

  public screenwidth = window.innerWidth;
  public sidebarType: string = "compact-wrapper";

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.screenwidth = (event.target as Window).innerWidth;
  }

  customizeSidebarType(val: string) {
    if (this.screenwidth < 1200) {
      if (val == "horizontal-wrapper") {
        this.layout.config.settings.sidebar_type = "compact-wrapper";
      }
    } else {
      this.sidebarType = val;
      this.layout.config.settings.sidebar_type = val;
      this.layout.customizer = "";
    }
  }
}
