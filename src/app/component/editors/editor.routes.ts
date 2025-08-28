import { Routes } from "@angular/router";

export const Editor: Routes = [
  {
    path: "",
    children: [
      {
        path: "ngx-editor",
        loadComponent: () =>
          import("./ngx-editor/ngx-editor").then((m) => m.NgxEditor),
        data: {
          title: "Ngx Editor",
          breadcrumb: "Ngx Editor",
        },
      },
      {
        path: "mde-editors",
        loadComponent: () =>
          import("./mde-editor/mde-editor").then((m) => m.MdeEditor),
        data: {
          title: "Mde Editor",
          breadcrumb: "Mde Editor",
        },
      },
    ],
  },
];
