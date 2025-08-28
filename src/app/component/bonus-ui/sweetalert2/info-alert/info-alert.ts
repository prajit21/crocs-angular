import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-info-alert",
  imports: [],
  templateUrl: "./info-alert.html",
  styleUrl: "./info-alert.scss",
})
export class InfoAlert {
  info() {
    Swal.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonColor: "var(--theme-default)",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Thank you for visit Crocs theme: true",
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  }
}
