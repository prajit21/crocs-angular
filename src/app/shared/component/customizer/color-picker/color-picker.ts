import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-color-picker",
  imports: [CommonModule, FormsModule],
  templateUrl: "./color-picker.html",
  styleUrl: "./color-picker.scss",
})
export class ColorPicker {
  layout = inject(LayoutService);

  public primary: string = "#5C61F2";
  public secondary: string = "#FF9766";
  public MIXLayout: string = "default";

  public primary_color = localStorage.getItem("primary_color") || "#5C61F2";
  public secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

  constructor() {
    document.documentElement.style.setProperty(
      "--theme-deafult",
      localStorage.getItem("primary_color"),
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      localStorage.getItem("secondary_color"),
    );
    var primary =
      localStorage.getItem("primary_color") ||
      this.layout.config.color.secondary_color;
    var secondary =
      localStorage.getItem("secondary_color") ||
      this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") ||
      this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") ||
      this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#5C61F2");
    document.documentElement.style.setProperty("--theme-secondary", "#FF9766");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value =
      "#5C61F2";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value =
      "#FF9766";
    this.layout.config.color.primary_color = "#5C61F2";
    this.layout.config.color.secondary_color = "#FF9766";
    localStorage.setItem("primary_color", "#5C61F2");
    localStorage.setItem("secondary_color", "#FF9766");
    window.location.reload();
  }

  customizeMixLayout(val: string) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}
