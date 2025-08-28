import { Component, input } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { button } from "../../../../shared/data/ui-kits/tag-pills";

@Component({
  selector: "app-common-badges-pills",
  imports: [Feathericon],
  templateUrl: "./common-badges-pills.html",
  styleUrl: "./common-badges-pills.scss",
})
export class CommonBadgesPills {
  readonly data = input<button[]>();
}
