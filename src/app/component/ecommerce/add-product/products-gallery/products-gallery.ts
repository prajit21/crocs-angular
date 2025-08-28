import { CommonModule } from "@angular/common";
import { Component, inject, output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { DropzoneModule, DropzoneConfigInterface } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-products-gallery",
  imports: [DropzoneModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./products-gallery.html",
  styleUrl: "./products-gallery.scss",
})
export class ProductsGallery {
  private fb = inject(FormBuilder);

  public activeStep: number = 2;

  readonly activeSteps = output<number>();

  myForm = new FormGroup({});

  next(_myForm: FormGroup) {
    const number = this.activeStep + 1;
    this.activeSteps.emit(number);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  public config: DropzoneConfigInterface = {
    url: "https://httpbin.org/post",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public config2: DropzoneConfigInterface = {
    acceptedFiles: "image/*,gif",
    url: "https://httpbin.org/post",
    addRemoveLinks: true,
  };

  public text =
    ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
