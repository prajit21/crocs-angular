import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-6",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-6.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./invoice-6.scss",
})
export class Invoice6 {}
