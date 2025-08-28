import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { ToastrService, ToastrModule } from "ngx-toastr";

import { Feathericon } from "../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-login",
  imports: [
    RouterModule,
    Feathericon,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    CommonModule,
  ],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  private fb = inject(FormBuilder);
  router = inject(Router);
  private toast = inject(ToastrService);

  public validate: boolean = false;
  public show: boolean = false;
  public loginForm: FormGroup;

  constructor() {
    const router = this.router;

    const userData = localStorage.getItem("user");
    if (userData?.length != null) {
      router.navigate(["/dashboard/default"]);
    }

    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: new FormControl("test123", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
    });
  }
  showPassword() {
    this.show = !this.show;
  }

  // Simple Login

  login() {
    this.validate = true;
    if (
      this.loginForm.value["email"] == "Test@gmail.com" &&
      this.loginForm.value["password"] == "test123"
    ) {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };

      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
      this.toast.success("Login Success...!", "", {
        positionClass: "toast-top-right",
        closeButton: true,
        timeOut: 4000,
      });
    }
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
