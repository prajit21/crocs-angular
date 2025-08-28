import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-inventory",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./inventory.html",
  styleUrl: "./inventory.scss",
})
export class Inventory {
  readonly activeSteps = output<number>();

  public activeStep: number = 6;

  myForm = new FormGroup({
    title: new FormControl(),
  });
}
