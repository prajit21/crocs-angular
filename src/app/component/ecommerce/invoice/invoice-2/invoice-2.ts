import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-2",
  imports: [NgxPrintModule, NgbModule],
  templateUrl: "./invoice-2.html",
  styleUrl: "./invoice-2.scss",
})
export class Invoice2 {}
