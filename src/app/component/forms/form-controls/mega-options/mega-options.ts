import { Component } from "@angular/core";

import { DefaultStyle } from "./default-style/default-style";
import { HorizontalStyle } from "./horizontal-style/horizontal-style";
import { InlineStyle } from "./inline-style/inline-style";
import { OfferStyleBorder } from "./offer-style-border/offer-style-border";
import { SolidBorderStyle } from "./solid-border-style/solid-border-style";
import { VariationCheckbox } from "./variation-checkbox/variation-checkbox";
import { VariationRadio } from "./variation-radio/variation-radio";
import { VerticalStyle } from "./vertical-style/vertical-style";
import { WithoutBordersStyle } from "./without-borders-style/without-borders-style";

@Component({
  selector: "app-mega-options",
  imports: [
    DefaultStyle,
    VariationRadio,
    VariationCheckbox,
    WithoutBordersStyle,
    SolidBorderStyle,
    OfferStyleBorder,
    InlineStyle,
    VerticalStyle,
    HorizontalStyle,
  ],
  templateUrl: "./mega-options.html",
  styleUrl: "./mega-options.scss",
})
export class MegaOptions {}
