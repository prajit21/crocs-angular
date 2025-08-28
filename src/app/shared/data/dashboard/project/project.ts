import {
  commenwidget1,
  commenwidget2,
  commenwidget3,
  commenwidget4,
} from "./project-chart";

export interface summery {
  name: string;
  type: string;
  date: string;
  location: string;
  value?: boolean;
  status: string;
  isActive: boolean;
  class: string;
  id: number;
  data: item[];
}
export interface item {
  img: string;
}

export interface task {
  id: number;
  des: string;
  bedge: string;
  value: string;
  class: string;
  date: string;
}

export interface CardData {
  class?: string;
  name?: string;
  title?: string;
  color?: string;
  email?: string;
  duedate?: string;
  budgets?: number;
  Client?: string;
  status?: string;
  colorClass?: string;
  data: item[];
}

export const TopProjectData = [
  {
    title: "Website Design",
    status: "Running",
    completed: "8/10",
    client: "Brave Wings",
    date: "25 April 2024",
    class: "primary",
    icon: "website-design",
    value: "80%",
  },
  {
    title: "NFT App Design",
    status: "Running",
    completed: "4/10",
    client: "Brave Wings",
    date: "25 April 2024",
    class: "secondary",
    icon: "nft-app",
    value: "40%",
  },
];

export const ProjectSummerys: summery[] = [
  {
    id: 1,
    name: "Landing page",
    type: "Website",
    date: "Oct 26,2024",
    location: "UK-John Peter",
    value: false,
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/14.png",
      },
      {
        img: "assets/images/dashboard-3/user/15.png",
      },
      {
        img: "assets/images/dashboard-3/user/16.png",
      },
    ],
  },
  {
    id: 2,
    name: "NFT Website Page",
    type: "Campaign",
    date: "Nov 10,2024",
    value: false,
    location: "Srinsoft technology",
    status: "Pending",
    isActive: false,
    class: "secondary",
    data: [
      {
        img: "assets/images/dashboard-3/user/17.png",
      },
      {
        img: "assets/images/dashboard-3/user/3.png",
      },
      {
        img: "assets/images/dashboard-3/user/7.png",
      },
    ],
  },
  {
    id: 3,
    name: "Email Design",
    type: "Design",
    date: "Feb 19,2024",
    value: false,
    location: "CA William sck",
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/12.png",
      },
      {
        img: "assets/images/dashboard-3/user/18.png",
      },
      {
        img: "assets/images/dashboard-3/user/19.png",
      },
    ],
  },
  {
    id: 4,
    name: "Banner Design",
    type: "Banner",
    date: "Nov 10,2024",
    value: false,
    location: "USA",
    status: "Pending",
    isActive: false,
    class: "secondary",
    data: [
      {
        img: "assets/images/dashboard-3/user/14.png",
      },
      {
        img: "assets/images/dashboard-3/user/15.png",
      },
      {
        img: "assets/images/dashboard-3/user/16.png",
      },
    ],
  },
  {
    id: 4,
    name: "Redesign Layout",
    type: "Landing",
    date: "Jan 10,2024",
    value: false,
    location: "Design technology",
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/17.png",
      },
      {
        img: "assets/images/dashboard-3/user/3.png",
      },
      {
        img: "assets/images/dashboard-3/user/7.png",
      },
    ],
  },
  {
    id: 6,
    name: "Front-End Website",
    type: "Website",
    date: "Nov 26,2024",
    value: false,
    location: "New zealand",
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/14.png",
      },
      {
        img: "assets/images/dashboard-3/user/15.png",
      },
      {
        img: "assets/images/dashboard-3/user/16.png",
      },
    ],
  },
  {
    id: 7,
    name: "Login & Sign Up Ui",
    type: "Ui Design",
    date: "Feb 19,2024",
    value: false,
    location: "CA William sck",
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/12.png",
      },
      {
        img: "assets/images/dashboard-3/user/18.png",
      },
      {
        img: "assets/images/dashboard-3/user/19.png",
      },
    ],
  },
  {
    id: 8,
    name: "NFT Website Page",
    type: "Campaign",
    date: "Nov 10,2024",
    value: false,
    location: "Srinsoft technology",
    status: "Pending",
    isActive: false,
    class: "secondary",
    data: [
      {
        img: "assets/images/dashboard-3/user/17.png",
      },
      {
        img: "assets/images/dashboard-3/user/3.png",
      },
      {
        img: "assets/images/dashboard-3/user/7.png",
      },
    ],
  },
  {
    id: 9,
    name: "Social Design",
    type: "Product Design",
    date: "Feb 19,2024",
    value: false,
    location: "CA William",
    status: "Active",
    isActive: false,
    class: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/12.png",
      },
      {
        img: "assets/images/dashboard-3/user/18.png",
      },
      {
        img: "assets/images/dashboard-3/user/19.png",
      },
    ],
  },
];

export const projectTask: task[] = [
  {
    id: 1,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "all",
    class: "success",
    date: "Nov 03,2024",
  },
  {
    id: 2,
    des: "Slimmuch Product Design Main Page",
    bedge: "Pending",
    value: "all",
    class: "secondary",
    date: "Aug 06,2024",
  },
  {
    id: 3,
    des: "Design of Interactive Prototypes",
    bedge: "In Progress",
    value: "all",
    class: "primary",
    date: "Nov 03,2024",
  },
  {
    id: 4,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "all",
    class: "success",
    date: "Dec 20,2024",
  },
  {
    id: 5,
    des: "Create a Userflow. Social Application Design",
    bedge: "In Progress",
    value: "all",
    class: "primary",
    date: "Nov 03,2024",
  },
  {
    id: 6,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "Important",
    class: "success",
    date: "Dec 20,2024",
  },
  {
    id: 7,
    des: "Slimmuch Product Design Main Page",
    bedge: "Pending",
    value: "Important",
    class: "secondary",
    date: "Aug 06,2024",
  },
  {
    id: 8,
    des: "Design of Interactive Prototypes",
    bedge: "In Progress",
    value: "Important",
    class: "primary",
    date: "Nov 03,2024",
  },
  {
    id: 9,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "notes",
    class: "success",
    date: "Dec 20,2024",
  },
  {
    id: 10,
    des: "Slimmuch Product Design Main Page",
    bedge: "Pending",
    value: "notes",
    class: "secondary",
    date: "Aug 06,2024",
  },
  {
    id: 11,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "link",
    class: "success",
    date: "Nov 03,2024",
  },
  {
    id: 12,
    des: "Slimmuch Product Design Main Page",
    bedge: "Pending",
    value: "link",
    class: "secondary",
    date: "Aug 06,2024",
  },
  {
    id: 13,
    des: "Design of Interactive Prototypes",
    bedge: "In Progress",
    value: "link",
    class: "primary",
    date: "Nov 03,2024",
  },
  {
    id: 14,
    des: "Create a Userflow. Social Application Design",
    bedge: "Done",
    value: "link",
    class: "success",
    date: "Dec 20,2024",
  },
];

export const projectDetails1: CardData[] = [
  {
    name: "mobile-app",
    title: "Mobile App",
    color: "primary",
    email: "joohe.lee@gmail.com",
    duedate: "25-10-2024",
    budgets: 36000,
    Client: "Joohee Lee",
    status: "Pending",
    colorClass: "secondary",
    data: [
      {
        img: "assets/images/dashboard-3/user/20.png",
      },
      {
        img: "assets/images/dashboard-3/user/21.png",
      },
      {
        img: "assets/images/dashboard-3/user/22.png",
      },
    ],
  },
];

export const projectDetails2: CardData[] = [
  {
    name: "banking-web",
    title: "Banking Web",
    color: "secondary",
    email: "wonkyu@gmail.com",
    duedate: "12-04-2024",
    budgets: 42500,
    Client: "Wonkyu Min",
    status: "Done",
    colorClass: "success",
    data: [
      {
        img: "assets/images/dashboard-3/user/23.png",
      },
      {
        img: "assets/images/dashboard-3/user/24.png",
      },
      {
        img: "assets/images/dashboard-3/user/25.png",
      },
    ],
  },
];

export const projectDetails3: CardData[] = [
  {
    name: "finance-app",
    title: "Finance App",
    color: "success",
    email: "yongjae@gmail.com",
    duedate: "10-09-2024",
    budgets: 15600,
    Client: "Yongjae Choi",
    status: "Inprogress",
    colorClass: "primary",
    data: [
      {
        img: "assets/images/dashboard-3/user/26.png",
      },
      {
        img: "assets/images/dashboard-3/user/27.png",
      },
    ],
  },
];

export const UpcomingDeadline = [
  {
    employee: "Kyuwon",
    img: "assets/images/dashboard-3/user/29.png",
    task: "Mobile",
    deadline: "10 Aug",
    value: "70%",
    class: "primary",
  },
  {
    employee: "Junsung",
    img: "assets/images/dashboard-3/user/30.png",
    task: "Landing",
    deadline: "3 Oct",
    value: "20%",
    class: "secondary",
  },
  {
    employee: "Joohe",
    img: "assets/images/dashboard-3/user/31.png",
    task: "NFT",
    deadline: "26 Dec",
    value: "70%",
    class: "success",
  },
  {
    employee: "Wonkyu",
    img: "assets/images/dashboard-3/user/32.png",
    task: "Hire",
    deadline: "10 Jun",
    value: "30%",
    class: "danger",
  },
];

export const TeamMemberTable = [
  {
    id: 1,
    name: "David",
    designation: "Designer",
    img: "assets/images/dashboard-3/user/33.png",
    hours: 10,
    option: commenwidget1,
  },
  {
    id: 2,
    name: "Induan",
    designation: "Designer",
    img: "assets/images/dashboard-3/user/35.png",
    hours: 25,
    option: commenwidget2,
  },
  {
    id: 3,
    name: "Nasuha",
    designation: "Developer",
    img: "assets/images/dashboard-3/user/34.png",
    hours: 65,
    option: commenwidget3,
  },

  {
    id: 4,
    name: "Wonkyu",
    designation: "Tester",
    img: "assets/images/dashboard-3/user/36.png",
    hours: 38,
    option: commenwidget4,
  },
];
