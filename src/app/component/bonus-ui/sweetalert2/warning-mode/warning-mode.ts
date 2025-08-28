import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-warning-mode",
  imports: [],
  templateUrl: "./warning-mode.html",
  styleUrl: "./warning-mode.scss",
})
export class WarningMode {
  warning() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "warning",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
