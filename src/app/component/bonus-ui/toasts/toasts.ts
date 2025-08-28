import { Component } from "@angular/core";

import { ColorsSchemes } from "./colors-schemes/colors-schemes";
import { DefaultToast } from "./default-toast/default-toast";
import { LiveToast } from "./live-toast/live-toast";
import { StackingToasts } from "./stacking-toasts/stacking-toasts";
import { TranslucentToasts } from "./translucent-toasts/translucent-toasts";
import { UniqueToast } from "./unique-toast/unique-toast";

@Component({
  selector: "app-toasts",
  imports: [
    LiveToast,
    DefaultToast,
    TranslucentToasts,
    UniqueToast,
    ColorsSchemes,
    StackingToasts,
  ],
  templateUrl: "./toasts.html",
  styleUrl: "./toasts.scss",
})
export class Toasts {}
