import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Listradios } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-lists-radios",
  imports: [FormsModule],
  templateUrl: "./lists-radios.html",
  styleUrl: "./lists-radios.scss",
})
export class ListsRadios {
  public listradiosData = Listradios;
}
