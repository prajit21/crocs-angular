import { Component } from "@angular/core";

import { BorderTabs } from "./border-tabs/border-tabs";
import { IconsTabs } from "./icons-tabs/icons-tabs";
import { JustifyTabs } from "./justify-tabs/justify-tabs";
import { MaterialLeftTabs } from "./material-left-tabs/material-left-tabs";
import { MaterialTabs } from "./material-tabs/material-tabs";
import { PillsTabs } from "./pills-tabs/pills-tabs";
import { SimpleTabs } from "./simple-tabs/simple-tabs";
import { VerticalTabs } from "./vertical-tabs/vertical-tabs";

@Component({
  selector: "app-tabs",
  imports: [
    SimpleTabs,
    IconsTabs,
    JustifyTabs,
    MaterialLeftTabs,
    MaterialTabs,
    PillsTabs,
    VerticalTabs,
    BorderTabs,
  ],
  templateUrl: "./tabs.html",
  styleUrl: "./tabs.scss",
})
export class Tabs {}
