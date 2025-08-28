import { Component } from "@angular/core";

@Component({
  selector: "app-icons-prefix-postfix",
  imports: [],
  templateUrl: "./icons-prefix-postfix.html",
  styleUrl: "./icons-prefix-postfix.scss",
})
export class IconsPrefixPostfix {
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
