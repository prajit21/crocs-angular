import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-colors-schemes",
  imports: [NgClass],
  templateUrl: "./colors-schemes.html",
  styleUrl: "./colors-schemes.scss",
})
export class ColorsSchemes {
  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }
}
