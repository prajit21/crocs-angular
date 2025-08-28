import { Component } from "@angular/core";

import { avatarSize } from "../../../../shared/data/ui-kits/avavtar";

@Component({
  selector: "app-avatars-sizes",
  imports: [],
  templateUrl: "./avatars-sizes.html",
  styleUrl: "./avatars-sizes.scss",
})
export class AvatarsSizes {
  public SizeData = avatarSize;
}
