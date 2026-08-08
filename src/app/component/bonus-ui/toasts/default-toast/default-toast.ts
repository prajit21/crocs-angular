import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-default-toast",
  imports: [NgClass],
  templateUrl: "./default-toast.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./default-toast.scss",
})
export class DefaultToast {
  public default: boolean = true;

  close() {
    this.default = false;
  }
}
