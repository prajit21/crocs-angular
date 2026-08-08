import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-colors-schemes",
  imports: [NgClass],
  templateUrl: "./colors-schemes.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./colors-schemes.scss",
})
export class ColorsSchemes {
  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }
}
