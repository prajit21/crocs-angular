import { Component } from "@angular/core";

import { BrowserDefaults } from "./browser-defaults/browser-defaults";
import { FormVaildation } from "./form-vaildation/form-vaildation";
import { TooltipVaildation } from "./tooltip-vaildation/tooltip-vaildation";

@Component({
  selector: "app-vaildation-form",
  imports: [BrowserDefaults, FormVaildation, TooltipVaildation],
  templateUrl: "./vaildation-form.html",
  styleUrl: "./vaildation-form.scss",
})
export class VaildationForm {}
