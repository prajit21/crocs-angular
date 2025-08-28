import { Routes } from "@angular/router";

export const User: Routes = [
  {
    path: "",
    children: [
      {
        path: "users-profile",
        loadComponent: () =>
          import("./user-profile/user-profile").then((m) => m.UserProfile),
        data: {
          title: "User Profile",
          breadcrumb: "Users Profile",
        },
      },
      {
        path: "profile-edit",
        loadComponent: () =>
          import("./user-edit/user-edit").then((m) => m.UserEdit),
        data: {
          title: "Edit Profile",
          breadcrumb: "Edit Profile",
        },
      },
      {
        path: "users-cards",
        loadComponent: () =>
          import("./user-cards/user-cards").then((m) => m.UserCards),
        data: {
          title: "Users Cards",
          breadcrumb: "Users Cards",
        },
      },
    ],
  },
];
