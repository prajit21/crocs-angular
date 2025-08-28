import { Component } from "@angular/core";

@Component({
  selector: "app-collapse-accordion",
  imports: [],
  templateUrl: "./collapse-accordion.html",
  styleUrl: "./collapse-accordion.scss",
})
export class CollapseAccordion {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese = !this.togglecollpese;
  }
}
