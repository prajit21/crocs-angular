import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TransactionHistoryData } from "../../../../shared/data/dashboard/default/default";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-transaction-history",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./transaction-history.html",
  styleUrl: "./transaction-history.scss",
})
export class TransactionHistory {
  public transactionData = TransactionHistoryData;
  public isOpen: boolean = false;
}
