import { Component, inject } from "@angular/core";

import {
  GalleryModule,
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { LightboxModule, Lightbox } from "ng-gallery/lightbox";

import { galleryGridData } from "../../../shared/data/gallery/gallery-grid";

@Component({
  selector: "app-gallery-grid",
  imports: [LightboxModule, GalleryModule],
  templateUrl: "./gallery-grid.html",
  styleUrl: "./gallery-grid.scss",
})
export class GalleryGrid {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public galleryGridData = galleryGridData;
  public items: GalleryItem[];

  ngOnInit() {
    this.items = this.galleryGridData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}
