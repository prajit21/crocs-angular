import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-cart",
  imports: [RouterModule],
  templateUrl: "./cart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./cart.scss",
})
export class Cart {
  public isShow: boolean = false;

  cart() {
    this.isShow = !this.isShow;
  }
}
