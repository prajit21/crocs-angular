import { Routes } from "@angular/router";

export const hidenav: Routes = [
  {
    path: "",
    children: [
      {
        path: "hide-nav-scroll",
        loadComponent: () =>
          import("./hide-nav-scroll/hide-nav-scroll").then(
            (m) => m.HideNavScroll,
          ),
        data: {
          title: "Hide Menu On Scrolll",
          breadcrumb: "Hide Menu On Scrolll",
        },
      },
    ],
  },
];
