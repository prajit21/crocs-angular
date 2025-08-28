import { Routes } from "@angular/router";

import { fullRoutes } from "./shared/routes/full-routes";
import { dashData } from "./shared/routes/routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard/default",
    pathMatch: "full",
  },
  {
    path: "auth/login",
    loadComponent: () => import("./auth/login/login").then((m) => m.Login),
  },
  {
    path: "",
    loadComponent: () =>
      import("./shared/component/layout/content/content").then(
        (m) => m.Content,
      ),
    children: dashData,
  },
  {
    path: "",
    loadComponent: () =>
      import("./shared/component/layout/full/full").then((m) => m.Full),
    children: fullRoutes,
  },
];
