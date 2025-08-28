import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { OpenInvoice } from "../../../../shared/data/dashboard/ecommerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-open-invoices",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./open-invoices.html",
  styleUrl: "./open-invoices.scss",
})
export class OpenInvoices {
  public OpenInvoice = OpenInvoice;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  openMenu(id: number) {
    this.OpenInvoice.filter((data) => {
      if (data.id == id) {
        data.isOpen = !data.isOpen;
      }
    });
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
