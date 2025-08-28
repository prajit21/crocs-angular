import { Routes } from "@angular/router";

export const Contacts: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./contact").then((m) => m.Contact),
        data: {
          title: "Contacts",
          breadcrumb: "Contacts",
        },
      },
    ],
  },
];
