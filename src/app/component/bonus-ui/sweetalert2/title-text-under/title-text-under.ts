import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-title-text-under",
  imports: [],
  templateUrl: "./title-text-under.html",
  styleUrl: "./title-text-under.scss",
})
export class TitleTextUnder {
  withTitle() {
    Swal.fire({
      title: "It's Magic!",
      text: "Thank you for visiting Crocs theme",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
