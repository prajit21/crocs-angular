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

import { gallerydes } from "../../../shared/data/gallery/gallery-grid";

@Component({
  selector: "app-gallery-grid-desc",
  imports: [LightboxModule, GalleryModule],
  templateUrl: "./gallery-grid-desc.html",
  styleUrl: "./gallery-grid-desc.scss",
})
export class GalleryGridDesc {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public galleryGrid = gallerydes;
  public items!: GalleryItem[];

  ngOnInit() {
    this.items = this.galleryGrid.map(
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
