import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-4",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-4.html",
  styleUrl: "./invoice-4.scss",
})
export class Invoice4 {}
