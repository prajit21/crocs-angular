import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  IOTdeveloper,
  UxDesigner,
  webDesigner,
} from "../../../../shared/data/ui-kits/tab";

@Component({
  selector: "app-justify-tabs",
  imports: [NgbModule, FormsModule],
  templateUrl: "./justify-tabs.html",
  styleUrl: "./justify-tabs.scss",
})
export class JustifyTabs {
  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;
}
