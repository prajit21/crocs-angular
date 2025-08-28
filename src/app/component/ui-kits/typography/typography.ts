import { Component } from "@angular/core";

import { Blockquotes } from "./blockquotes/blockquotes";
import { ColoredHeadings } from "./colored-headings/colored-headings";
import { DisplayHeadings } from "./display-headings/display-headings";
import { FontWeight } from "./font-weight/font-weight";
import { Headings } from "./headings/headings";
import { InlineTextElements } from "./inline-text-elements/inline-text-elements";
import { ListingTypography } from "./listing-typography/listing-typography";
import { TextColor } from "./text-color/text-color";

@Component({
  selector: "app-typography",
  imports: [
    Headings,
    ColoredHeadings,
    DisplayHeadings,
    FontWeight,
    TextColor,
    InlineTextElements,
    Blockquotes,
    ListingTypography,
  ],
  templateUrl: "./typography.html",
  styleUrl: "./typography.scss",
})
export class Typography {}
