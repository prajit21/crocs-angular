import { Component, ChangeDetectionStrategy } from "@angular/core";

import { simplePricingCard } from "../../../../shared/data/ecommerce/pricing";

@Component({
  selector: "app-simple-pricing-card",
  imports: [],
  templateUrl: "./simple-pricing-card.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./simple-pricing-card.scss",
})
export class SimplePricingCard {
  public simplepricing = simplePricingCard;
}
