import { Routes } from "@angular/router";

export const SupportTickets: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./support-ticket").then((m) => m.SupportTicket),
    data: {
      breadcrumb: "Support Ticket",
    },
  },
];
