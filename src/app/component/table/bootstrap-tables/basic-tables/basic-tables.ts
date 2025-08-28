import { Component } from "@angular/core";

import { BasicTableBorderBottomColor } from "./basic-table-border-bottom-color/basic-table-border-bottom-color";
import { BreckpointSpecific } from "./breckpoint-specific/breckpoint-specific";
import { Caption } from "./caption/caption";
import { CustomtableColorHoverStripped } from "./customtable-color-hover-stripped/customtable-color-hover-stripped";
import { DashedBorder } from "./dashed-border/dashed-border";
import { HoverableRowsHorizontalBorder } from "./hoverable-rows-horizontal-border/hoverable-rows-horizontal-border";
import { InverseTable } from "./inverse-table/inverse-table";
import { InverseTablePrimaryBackground } from "./inverse-table-primary-background/inverse-table-primary-background";
import { ResponsiveTablesLightBackground } from "./responsive-tables-light-background/responsive-tables-light-background";
import { SizingTables } from "./sizing-tables/sizing-tables";
import { StripedRowInverseTable } from "./striped-row-inverse-table/striped-row-inverse-table";
import { TableHeadOptions } from "./table-head-options/table-head-options";

@Component({
  selector: "app-basic-tables",
  imports: [
    BasicTableBorderBottomColor,
    InverseTable,
    BreckpointSpecific,
    HoverableRowsHorizontalBorder,
    InverseTablePrimaryBackground,
    Caption,
    CustomtableColorHoverStripped,
    DashedBorder,
    SizingTables,
    ResponsiveTablesLightBackground,
    StripedRowInverseTable,
    TableHeadOptions,
  ],
  templateUrl: "./basic-tables.html",
  styleUrl: "./basic-tables.scss",
})
export class BasicTables {}
