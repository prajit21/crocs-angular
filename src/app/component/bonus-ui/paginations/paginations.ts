import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ActiveDisabledPagination } from "./active-disabled-pagination/active-disabled-pagination";
import { AlignmentPagination } from "./alignment-pagination/alignment-pagination";
import { DefaultPagination } from "./default-pagination/default-pagination";
import { IconsPagination } from "./icons-pagination/icons-pagination";
import { RoundedPagination } from "./rounded-pagination/rounded-pagination";
import { SizingPagination } from "./sizing-pagination/sizing-pagination";

@Component({
  selector: "app-paginations",
  imports: [
    DefaultPagination,
    ActiveDisabledPagination,
    AlignmentPagination,
    IconsPagination,
    RoundedPagination,
    SizingPagination,
  ],
  templateUrl: "./paginations.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./paginations.scss",
})
export class Paginations {}
