import { CommonModule } from "@angular/common";
import { Component, HostListener, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ColorPicker } from "./color-picker/color-picker";
import { QuickOption } from "./quick-option/quick-option";
import { Config, LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-customizer",
  imports: [CommonModule, ColorPicker, QuickOption],
  templateUrl: "./customizer.html",
  styleUrl: "./customizer.scss",
})
export class Customizer {
  private modalService = inject(NgbModal);
  layoutService = inject(LayoutService);

  public customizer: string = "";
  public sidebarType: string = "compact-wrapper";
  public sidebarSetting: string = "default-sidebar";
  public screenwidth: number = window.innerWidth;
  public layoutType: string = "ltr";

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: number } }) {
    this.screenwidth = event.target.innerWidth;
  }

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, {
      backdropClass: "dark-modal",
      centered: true,
    });
  }

  customizeSidebarType(val: string) {
    this.sidebarType = val;
  }

  copyText(data: Config) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
}
