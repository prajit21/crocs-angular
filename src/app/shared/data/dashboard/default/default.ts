export interface selling {
  productid: string;
  title: string;
  img: string;
  Couponcode: string;
  flagimg: string;
  percentage: number;
  price: number;
}

export interface transaction {
  icon: string;
  title: string;
  datetime: string;
  status: string;
  class: string;
  price: number;
}

export const TopSellingProducts: selling[] = [
  {
    productid: "#A5647KB",
    title: "Sneaker Shoes",
    img: "assets/images/dashboard/product/1.png",
    Couponcode: "PIX001",
    flagimg: "assets/images/dashboard/flag/1.png",
    percentage: -51,
    price: 99.0,
  },
  {
    productid: "#NB86H2E",
    title: "Sweat Shirt",
    img: "assets/images/dashboard/product/2.png",
    Couponcode: "PIX002",
    flagimg: "assets/images/dashboard/flag/2.png",
    percentage: -78,
    price: 66.0,
  },
  {
    productid: "#UB654GH",
    title: "Nike Travel Bag",
    img: "assets/images/dashboard/product/3.png",
    Couponcode: "PIX003",
    flagimg: "assets/images/dashboard/flag/3.png",
    percentage: -0.4,
    price: 116.0,
  },
  {
    productid: "#UB654GH",
    title: "Monster Cap",
    img: "assets/images/dashboard/product/4.png",
    Couponcode: "PIX004",
    flagimg: "assets/images/dashboard/flag/4.png",
    percentage: -60,
    price: 99.0,
  },
];

export const recentorder = [
  {
    no: 1,
    img: "assets/images/dashboard/user/1.png",
    customername: "Rocky Shoes",
    orderid: "#8934",
    date: "01/12/2024",
    city: "Armenia",
    status: "Paid",
    class: "primary",
    amount: 238.8,
  },
  {
    no: 2,
    img: "assets/images/dashboard/user/2.png",
    customername: "Nasuha Makusta",
    orderid: "#6529",
    date: "12/10/2024",
    city: "Bhutan",
    status: "Pending",
    class: "secondary",
    amount: 654.95,
  },
  {
    no: 3,
    img: "assets/images/dashboard/user/3.png",
    customername: "Rocky Shoes",
    orderid: "#3659",
    date: "09/04/2024",
    city: "Ghana",
    status: "Done",
    class: "success",
    amount: 864.35,
  },
  {
    no: 4,
    img: "assets/images/dashboard/user/4.png",
    customername: "Pogba Nehuntas",
    orderid: "#2158",
    date: "10/05/2024",
    city: "Kenya",
    status: "Cancel",
    class: "danger",
    amount: 951.37,
  },
];

export const TransactionHistoryData: transaction[] = [
  {
    icon: "send",
    title: "Receipt from external Wallet",
    datetime: "Mar 21,2024, 4:45pm",
    status: "Completed",
    class: "primary",
    price: 248.0,
  },
  {
    icon: "work",
    title: "Process refund to",
    datetime: "Feb 20,2024, 2:10pm",
    status: "Pending",
    class: "secondary",
    price: 548.0,
  },
  {
    icon: "graph",
    title: "Sending to Citizen",
    datetime: "Jun 17,2024, 12:45pm",
    status: "Verified",
    class: "success",
    price: 953.0,
  },
  {
    icon: "bookmark",
    title: "Payment From #12345",
    datetime: "Oct 30,2024, 1:31pm",
    status: "Rejected",
    class: "danger",
    price: 349.0,
  },
];
