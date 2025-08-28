import { Component } from "@angular/core";

@Component({
  selector: "app-live-alert",
  imports: [],
  templateUrl: "./live-alert.html",
  styleUrl: "./live-alert.scss",
})
export class LiveAlert {
  public showLog = false;
  public counter: number = 0;
  public array: number[] = [];

  onShowLog() {
    this.showLog = true;
    this.counter++;
    this.array.push(this.counter);
  }

  close(Data: number) {
    this.array.splice(this.array.indexOf(Data), 1);
  }
}
