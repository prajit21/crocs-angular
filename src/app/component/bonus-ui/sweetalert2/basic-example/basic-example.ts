import { Component, ChangeDetectionStrategy } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-basic-example",
  imports: [],
  templateUrl: "./basic-example.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./basic-example.scss",
})
export class BasicExample {
  basicAlert() {
    Swal.fire({
      title: "Welcome! to the Crocs theme",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
