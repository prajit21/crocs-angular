import { Routes } from "@angular/router";

export const Email: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./letter-box/letter-box").then((m) => m.LetterBox),
    data: {
      title: "Letter Box",
      breadcrumb: "Letter Box",
    },
  },
];
