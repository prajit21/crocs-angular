export interface staps {
  icon: string;
  mainTitle: string;
  subTitle: string;
  stepNumber: number;
  active: boolean;
}

export const AddProducts: staps[] = [
  {
    stepNumber: 1,
    icon: "product-detail",
    active: false,
    mainTitle: "Add Product Details",
    subTitle: "Add Product name & details",
  },
  {
    stepNumber: 2,
    icon: "product-gallery",
    active: false,
    mainTitle: "Product gallery",
    subTitle: "thumbnail & Add Product Gallery",
  },
  {
    stepNumber: 3,
    icon: "product-category",
    active: false,
    mainTitle: "Product Categories",
    subTitle: "Add Product category, Status and Tags",
  },
  {
    stepNumber: 4,
    icon: "pricing",
    active: false,
    mainTitle: "Selling prices",
    subTitle: "Add Product basic price & Discount",
  },
  {
    stepNumber: 5,
    icon: "advance",
    active: false,
    mainTitle: "Advance",
    subTitle: "Add Meta details & Inventory details",
  },
];
