import { Routes } from "@angular/router";

export const Gallery: Routes = [
  {
    path: "",
    children: [
      {
        path: "gallary-grid",
        loadComponent: () =>
          import("./gallery-grid/gallery-grid").then((m) => m.GalleryGrid),
        data: {
          title: "Gallery",
          breadcrumb: "Gallery",
        },
      },
      {
        path: "gallery-grid-desc",
        loadComponent: () =>
          import("./gallery-grid-desc/gallery-grid-desc").then(
            (m) => m.GalleryGridDesc,
          ),
        data: {
          title: "Gallery Grid Desc",
          breadcrumb: "Gallery Grid Desc",
        },
      },
      {
        path: "masonry-gallery",
        loadComponent: () =>
          import("./mesonry-gallery/mesonry-gallery").then(
            (m) => m.MesonryGallery,
          ),
        data: {
          title: "Masonry Gallery",
          breadcrumb: "Masonry Gallery",
        },
      },
      {
        path: "masonry-with-desc",
        loadComponent: () =>
          import("./mesonry-with-desc/mesonry-with-desc").then(
            (m) => m.MesonryWithDesc,
          ),
        data: {
          title: "Masonry Gallery With Description",
          breadcrumb: "Masonry Gallery With Description",
        },
      },
      {
        path: "hover-effects",
        loadComponent: () =>
          import("./hover-effects/hover-effects").then((m) => m.HoverEffects),
        data: {
          title: "Image Hover Effects",
          breadcrumb: "Image Hover Effects",
        },
      },
    ],
  },
];
