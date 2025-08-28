import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-cart",
  imports: [CommonModule, RouterModule],
  templateUrl: "./cart.html",
  styleUrl: "./cart.scss",
})
export class Cart {
  public isShow: boolean = false;

  cart() {
    this.isShow = !this.isShow;
  }
}
