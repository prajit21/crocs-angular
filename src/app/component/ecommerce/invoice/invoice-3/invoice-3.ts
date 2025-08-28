import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-3",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-3.html",
  styleUrl: "./invoice-3.scss",
})
export class Invoice3 {}
