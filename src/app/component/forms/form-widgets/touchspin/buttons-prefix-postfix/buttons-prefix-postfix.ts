import { Component } from "@angular/core";

@Component({
  selector: "app-buttons-prefix-postfix",
  imports: [],
  templateUrl: "./buttons-prefix-postfix.html",
  styleUrl: "./buttons-prefix-postfix.scss",
})
export class ButtonsPrefixPostfix {
  public counter: number[] = [0, 0];

  public increment(i: number) {
    if (i === 0 || i === 1) {
      this.counter[i] += 1;
    }
  }

  public decrement(i: number) {
    if (i === 0 || i === 1) {
      if (this.counter[i] > 0) {
        this.counter[i] -= 1;
      }
    }
  }
}
