import { Component, output, ChangeDetectionStrategy } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-inventory",
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: "./inventory.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./inventory.scss",
})
export class Inventory {
  readonly activeSteps = output<number>();

  public activeStep: number = 6;

  myForm = new FormGroup({
    title: new FormControl(),
  });
}
