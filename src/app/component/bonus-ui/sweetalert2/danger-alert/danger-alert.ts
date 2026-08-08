import { Component, ChangeDetectionStrategy } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-danger-alert",
  imports: [],
  templateUrl: "./danger-alert.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./danger-alert.scss",
})
export class DangerAlert {
  danger() {
    Swal.fire({
      title: "It's danger",
      text: "Something went wrong!",
      icon: "error",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
