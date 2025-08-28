import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../../services/layout.service";

@Component({
  selector: "app-sidebar-icon",
  imports: [CommonModule],
  templateUrl: "./sidebar-icon.html",
  styleUrl: "./sidebar-icon.scss",
})
export class SidebarIcon {
  layout = inject(LayoutService);

  public icon: string = "fill-svg";

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == "fill-svg") {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    } else {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    }
  }
}
