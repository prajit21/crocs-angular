import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-colors-schemes",
  imports: [CommonModule],
  templateUrl: "./colors-schemes.html",
  styleUrl: "./colors-schemes.scss",
})
export class ColorsSchemes {
  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }
}
