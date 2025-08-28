import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-mode",
  imports: [CommonModule],
  templateUrl: "./mode.html",
  styleUrl: "./mode.scss",
})
export class Mode {
  layout = inject(LayoutService);

  public dark: boolean =
    this.layout.config.settings.layout_version == "dark-only" ? true : false;

  layoutToggle() {
    this.dark = !this.dark;
    this.dark
      ? document.body.classList.add("dark-only")
      : document.body.classList.remove("dark-only");
    this.layout.config.settings.layout_version = this.dark
      ? "dark-only"
      : "light-only";
  }
}
