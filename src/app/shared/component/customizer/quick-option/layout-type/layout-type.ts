import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../../services/layout.service";

@Component({
  selector: "app-layout-type",
  imports: [CommonModule],
  templateUrl: "./layout-type.html",
  styleUrl: "./layout-type.scss",
})
export class LayoutType {
  layout = inject(LayoutService);

  public layoutType: string = "ltr";

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if (val == "rtl") {
      document.getElementsByTagName("html")[0].setAttribute("dir", val);
      document.body?.classList.add("rtl");
      document.body?.classList.remove("box-layout");
    } else if (val == "box-layout") {
      document.getElementsByTagName("html")[0].setAttribute("dir", val);
      document.body?.classList.add("box-layout");
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("dir");
      document.body?.classList.add("ltr");
      document.body?.classList.remove("box-layout");
    }
  }
}
