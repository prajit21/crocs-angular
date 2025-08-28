import { Routes } from "@angular/router";

export const Todos: Routes = [
  {
    path: "",
    loadComponent: () => import("./todo").then((m) => m.Todo),
    data: {
      title: "To Do",
      breadcrumb: "To Do",
    },
  },
];
