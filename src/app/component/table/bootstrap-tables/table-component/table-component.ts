import { Component } from "@angular/core";

import { AlertsTable } from "./alerts-table/alerts-table";
import { BadgesTable } from "./badges-table/badges-table";
import { CheckboxTable } from "./checkbox-table/checkbox-table";
import { InputTable } from "./input-table/input-table";
import { ProgressbarTable } from "./progressbar-table/progressbar-table";
import { RadioTable } from "./radio-table/radio-table";
import { SelectTable } from "./select-table/select-table";
import { SwitchTable } from "./switch-table/switch-table";
import { TooltipTriggersTable } from "./tooltip-triggers-table/tooltip-triggers-table";
import { UiTable } from "./ui-table/ui-table";

@Component({
  selector: "app-table-component",
  imports: [
    UiTable,
    AlertsTable,
    ProgressbarTable,
    CheckboxTable,
    RadioTable,
    SelectTable,
    InputTable,
    BadgesTable,
    TooltipTriggersTable,
    SwitchTable,
  ],
  templateUrl: "./table-component.html",
  styleUrl: "./table-component.scss",
})
export class TableComponent {}
