import { Component } from "@angular/core";

import { BadgeHeadingsExample } from "./badge-headings-example/badge-headings-example";
import { BadgesPartButtons } from "./badges-part-buttons/badges-part-buttons";
import { CommonBadgesPills } from "./common-badges-pills/common-badges-pills";
import * as data from "../../../shared/data/ui-kits/tag-pills";

@Component({
  selector: "app-tag-pills",
  imports: [CommonBadgesPills, BadgesPartButtons, BadgeHeadingsExample],
  templateUrl: "./tag-pills.html",
  styleUrl: "./tag-pills.scss",
})
export class TagPills {
  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;
}
