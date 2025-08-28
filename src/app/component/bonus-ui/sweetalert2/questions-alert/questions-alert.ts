import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-questions-alert",
  imports: [],
  templateUrl: "./questions-alert.html",
  styleUrl: "./questions-alert.scss",
})
export class QuestionsAlert {
  Questions() {
    Swal.fire({
      text: "Are you sure you want to do this?",
      showCancelButton: true,
      confirmButtonText: "Aww yiss!",
      cancelButtonText: "Oh  noez!",
      confirmButtonColor: "var(--theme-default)",
      customClass: {
        confirmButton: "order-2",
        cancelButton: "order-1",
      },
    });
  }
}
