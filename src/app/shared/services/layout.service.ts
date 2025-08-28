import { Injectable } from "@angular/core";

export interface Config {
  settings: {
    layout_type: string;
    layout_version: string;
    sidebar_type: string;
    icon: string;
  };
  color: {
    primary_color: string;
    secondary_color: string;
  };
}
@Injectable({
  providedIn: "root",
})
export class LayoutService {
  public customizer: string = "";
  public margin: number = 0;
  public config: Config = {
    settings: {
      layout_type: "ltr",
      layout_version: "light",
      sidebar_type: "compact-wrapper",
      icon: "fill-svg",
    },
    color: {
      primary_color: "#5C61F2",
      secondary_color: "#FF9766",
    },
  };

  constructor() {
    if (this.config.settings.layout_type == "box-layout") {
      document.body.classList.add("box-layout");
    }
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", this.config.settings.layout_type);

    document.documentElement.style.setProperty(
      "--theme-default",
      this.config.color.primary_color,
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      this.config.color.secondary_color,
    );
  }
}
