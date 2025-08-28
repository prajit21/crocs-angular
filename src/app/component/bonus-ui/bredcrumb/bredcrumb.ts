import { Component } from "@angular/core";

import { ColoredBreadcrumb } from "./colored-breadcrumb/colored-breadcrumb";
import { DefaultBreadcrumb } from "./default-breadcrumb/default-breadcrumb";
import { DividerBreadcrumb } from "./divider-breadcrumb/divider-breadcrumb";
import { IconsBreadcrumb } from "./icons-breadcrumb/icons-breadcrumb";
import { VariationBreadcrumb } from "./variation-breadcrumb/variation-breadcrumb";

@Component({
  selector: "app-bredcrumb",
  imports: [
    ColoredBreadcrumb,
    DefaultBreadcrumb,
    DividerBreadcrumb,
    IconsBreadcrumb,
    VariationBreadcrumb,
  ],
  templateUrl: "./bredcrumb.html",
  styleUrl: "./bredcrumb.scss",
})
export class Bredcrumb {}
