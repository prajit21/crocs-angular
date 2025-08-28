import { Component } from "@angular/core";

import { ButtonsPrefixPostfix } from "./buttons-prefix-postfix/buttons-prefix-postfix";
import { DefaultTouchspin } from "./default-touchspin/default-touchspin";
import { IconsPrefixPostfix } from "./icons-prefix-postfix/icons-prefix-postfix";
import { OutlinedTouchspin } from "./outlined-touchspin/outlined-touchspin";
import { RoundedTouchspin } from "./rounded-touchspin/rounded-touchspin";

@Component({
  selector: "app-touchspin",
  imports: [
    DefaultTouchspin,
    OutlinedTouchspin,
    IconsPrefixPostfix,
    ButtonsPrefixPostfix,
    RoundedTouchspin,
  ],
  templateUrl: "./touchspin.html",
  styleUrl: "./touchspin.scss",
})
export class Touchspin {}
