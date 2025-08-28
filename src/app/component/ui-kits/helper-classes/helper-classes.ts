import { Component } from "@angular/core";

import { BackgroundColors } from "./background-colors/background-colors";
import { BordersDisplays } from "./borders-displays/borders-displays";
import { FontSizes } from "./font-sizes/font-sizes";
import { FontStyle } from "./font-style/font-style";
import { FontWeight } from "./font-weight/font-weight";
import { ImagesSizes } from "./images-sizes/images-sizes";
import { StylesBorders } from "./styles-borders/styles-borders";
import { TextColors } from "./text-colors/text-colors";

@Component({
  selector: "app-helper-classes",
  imports: [
    StylesBorders,
    BordersDisplays,
    BackgroundColors,
    ImagesSizes,
    FontStyle,
    FontWeight,
    TextColors,
    FontSizes,
  ],
  templateUrl: "./helper-classes.html",
  styleUrl: "./helper-classes.scss",
})
export class HelperClasses {}
