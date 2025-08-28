import { Routes } from "@angular/router";

export const Icons: Routes = [
  {
    path: "",
    children: [
      {
        path: "flag-icons",
        loadComponent: () =>
          import("./flag-icons/flag-icons").then((m) => m.FlagIcons),
        data: {
          title: "flag icons",
          breadcrumb: "flag icons",
        },
      },
      {
        path: "fontawesome-icons",
        loadComponent: () =>
          import("./font-awesome/font-awesome").then((m) => m.FontAwesome),
        data: {
          title: "Font Awesome Icon",
          breadcrumb: "Font Awesome Icon",
        },
      },
      {
        path: "ico-icons",
        loadComponent: () =>
          import("./ico-icons/ico-icons").then((m) => m.IcoIcons),
        data: {
          title: "ICO Icon",
          breadcrumb: "ICO Icon",
        },
      },
      {
        path: "feather-icons",
        loadComponent: () =>
          import("./feather-icons/feather-icons").then((m) => m.FeatherIcons),
        data: {
          title: "Feather Icon",
          breadcrumb: "Feather Icon",
        },
      },
      {
        path: "themify-icons",
        loadComponent: () =>
          import("./themify-icons/themify-icons").then((m) => m.ThemifyIcons),
        data: {
          title: "Themify Icon",
          breadcrumb: "Themify Icon",
        },
      },
      {
        path: "weather-icons",
        loadComponent: () =>
          import("./weather-icons/weather-icons").then((m) => m.WeatherIcons),
        data: {
          title: "Weather Icon",
          breadcrumb: "Weather Icon",
        },
      },
    ],
  },
];
