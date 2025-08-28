import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown";

@Component({
  selector: "app-justify-contents",
  imports: [NgbModule],
  templateUrl: "./justify-contents.html",
  styleUrl: "./justify-contents.scss",
})
export class JustifyContents {
  public justifyData = Data.JustifyContents;
}
