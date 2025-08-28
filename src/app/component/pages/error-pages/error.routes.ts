import { Routes } from "@angular/router";

export const ErrorPages: Routes = [
  {
    path: "",
    children: [
      {
        path: "error-400",
        loadComponent: () =>
          import("./error-400/error-400").then((m) => m.Error400),
      },
      {
        path: "error-401",
        loadComponent: () =>
          import("./error-401/error-401").then((m) => m.Error401),
      },
      {
        path: "error-403",
        loadComponent: () =>
          import("./error-403/error-403").then((m) => m.Error403),
      },
      {
        path: "error-404",
        loadComponent: () =>
          import("./error-404/error-404").then((m) => m.Error404),
      },
      {
        path: "error-500",
        loadComponent: () =>
          import("./error-500/error-500").then((m) => m.Error500),
      },
      {
        path: "error-503",
        loadComponent: () =>
          import("./error-503/error-503").then((m) => m.Error503),
      },
    ],
  },
];
