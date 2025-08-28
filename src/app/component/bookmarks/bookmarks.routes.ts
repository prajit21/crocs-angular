import { Routes } from "@angular/router";

export const Bookmark: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./bookmarks").then((m) => m.Bookmarks),
        data: {
          title: "Bookmarks",
          breadcrumb: "Bookmarks",
        },
      },
    ],
  },
];
