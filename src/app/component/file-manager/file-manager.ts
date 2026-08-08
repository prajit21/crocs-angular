import { Component, ChangeDetectionStrategy } from "@angular/core";

import { FileItem } from "./file-item/file-item";
import { FileSidebar } from "./file-sidebar/file-sidebar";

@Component({
  selector: "app-file-manager",
  imports: [FileSidebar, FileItem],
  templateUrl: "./file-manager.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./file-manager.scss",
})
export class FileManager {}
