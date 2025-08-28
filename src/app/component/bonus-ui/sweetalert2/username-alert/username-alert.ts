import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-username-alert",
  imports: [],
  templateUrl: "./username-alert.html",
  styleUrl: "./username-alert.scss",
})
export class UsernameAlert {
  Username() {
    Swal.fire({
      text: "Please! Submit Your Username :",
      confirmButtonColor: "var(--theme-default)",
      input: "text",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          text: "Your name is :" + result.value,
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  }
}
