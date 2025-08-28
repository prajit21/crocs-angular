import { Routes } from "@angular/router";

export const AuthenticationPages: Routes = [
  {
    path: "",
    children: [
      {
        path: "simple",
        loadComponent: () =>
          import("./login-simple/login-simple").then((m) => m.LoginSimple),
      },
      {
        path: "image-one",
        loadComponent: () =>
          import("./login-bg-image/login-bg-image").then((m) => m.LoginBgImage),
      },
      {
        path: "image-two",
        loadComponent: () =>
          import("./login-image-two/login-image-two").then(
            (m) => m.LoginImageTwo,
          ),
      },
      {
        path: "validation",
        loadComponent: () =>
          import("./login-validation/login-validation").then(
            (m) => m.LoginValidation,
          ),
      },
      {
        path: "tooltip",
        loadComponent: () =>
          import("./login-tooltip/login-tooltip").then((m) => m.LoginTooltip),
      },
      {
        path: "sweetalert",
        loadComponent: () =>
          import("./login-sweetalert/login-sweetalert").then(
            (m) => m.LoginSweetalert,
          ),
      },
      {
        path: "sweetalert",
        loadComponent: () =>
          import("./login-sweetalert/login-sweetalert").then(
            (m) => m.LoginSweetalert,
          ),
      },
      {
        path: "register-simple",
        loadComponent: () =>
          import("./register-simple/register-simple").then(
            (m) => m.RegisterSimple,
          ),
      },
      {
        path: "register-image-one",
        loadComponent: () =>
          import("./register-bg-image/register-bg-image").then(
            (m) => m.RegisterBgImage,
          ),
      },
      {
        path: "register-image-two",
        loadComponent: () =>
          import("./register-two-image/register-two-image").then(
            (m) => m.RegisterTwoImage,
          ),
      },
      {
        path: "unlock-user",
        loadComponent: () =>
          import("./unlock-user/unlock-user").then((m) => m.UnlockUser),
      },
      {
        path: "forget-password",
        loadComponent: () =>
          import("./forget-password/forget-password").then(
            (m) => m.ForgetPassword,
          ),
      },
      {
        path: "reset-password",
        loadComponent: () =>
          import("./reset-password/reset-password").then(
            (m) => m.ResetPassword,
          ),
      },
      {
        path: "maintenance",
        loadComponent: () =>
          import("./maintenance/maintenance").then((m) => m.Maintenance),
      },
    ],
  },
];
