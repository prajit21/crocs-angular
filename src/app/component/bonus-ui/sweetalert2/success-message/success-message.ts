import { Component, ChangeDetectionStrategy } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-success-message",
  imports: [],
  templateUrl: "./success-message.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./success-message.scss",
})
export class SuccessMessage {
  success() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
