import { Routes } from "@angular/router";

export const SoicalApps: Routes = [
  {
    path: "",
    loadComponent: () => import("./soical-app").then((m) => m.SoicalApp),
    data: {
      title: "Soical App",
      breadcrumb: "Soical App",
    },
  },
];
