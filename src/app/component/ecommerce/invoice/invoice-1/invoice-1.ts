import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-1",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-1.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./invoice-1.scss",
})
export class Invoice1 {}
