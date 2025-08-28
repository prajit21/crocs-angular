import { Routes } from "@angular/router";

export const CommingSoonPages: Routes = [
  {
    path: "",
    children: [
      {
        path: "coming-soon-simple",
        loadComponent: () =>
          import("./coming-simple/coming-simple").then((m) => m.ComingSimple),
      },
      {
        path: "coming-soon-image",
        loadComponent: () =>
          import("./coming-bg-image/coming-bg-image").then(
            (m) => m.ComingBgImage,
          ),
      },
      {
        path: "coming-soon-video",
        loadComponent: () =>
          import("./coming-bg-video/coming-bg-video").then(
            (m) => m.ComingBgVideo,
          ),
      },
    ],
  },
];
