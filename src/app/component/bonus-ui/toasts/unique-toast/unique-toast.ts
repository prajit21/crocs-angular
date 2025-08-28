import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-unique-toast",
  imports: [CommonModule],
  templateUrl: "./unique-toast.html",
  styleUrl: "./unique-toast.scss",
})
export class UniqueToast {
  public Unique: boolean = true;

  close() {
    this.Unique = false;
  }
}
