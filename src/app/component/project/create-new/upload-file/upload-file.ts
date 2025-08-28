import { Component } from "@angular/core";

import { DropzoneModule, DropzoneConfigInterface } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-upload-file",
  imports: [DropzoneModule],
  templateUrl: "./upload-file.html",
  styleUrl: "./upload-file.scss",
})
export class UploadFile {
  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    autoProcessQueue: true,
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text =
    ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
