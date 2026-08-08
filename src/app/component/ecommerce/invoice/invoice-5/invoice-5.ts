import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-5",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-5.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./invoice-5.scss",
})
export class Invoice5 {}
