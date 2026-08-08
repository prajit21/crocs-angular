import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BecomeMembers } from "../../../../shared/data/ecommerce/pricing";

@Component({
  selector: "app-become-member",
  imports: [],
  templateUrl: "./become-member.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./become-member.scss",
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
