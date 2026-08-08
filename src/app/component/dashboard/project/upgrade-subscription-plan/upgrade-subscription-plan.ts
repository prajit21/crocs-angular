import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-upgrade-subscription-plan",
  imports: [RouterModule],
  templateUrl: "./upgrade-subscription-plan.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./upgrade-subscription-plan.scss",
})
export class UpgradeSubscriptionPlan {}
