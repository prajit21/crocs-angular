import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ticketListStatus } from "../../../shared/data/support-ticket/support-ticket";

@Component({
  selector: "app-support-ticket-list",
  imports: [],
  templateUrl: "./support-ticket-list.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./support-ticket-list.scss",
})
export class SupportTicketList {
  public ticketData = ticketListStatus;
}
