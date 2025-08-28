export interface contectsdata {
  id: number;
  title: string;
  item: item[];
}

export interface item {
  id: number;
  name: string;
  number: string;
  img?: string;
  text?: string;
  class?: string;
}
export interface chatDetails {
  id?: number;
  name: string;
  title?: string;
  active: boolean;
  status?: string;
  chats: string;
  img: string;
  time: string;
  padding?: number;
  class: string;
  msg?: msgdata[];
}

export interface msgdata {
  userName?: string;
  userTime?: string;
  userimg?: string;
  userText?: string;
  otherName?: string;
  reply?: boolean;
  otherimg?: string;
  otherText?: string;
  otherTime?: string;
  rightside?: string;
  leftside?: string;
}

export const Chats: chatDetails[] = [
  {
    id: 1,
    name: "Cameron Williamson",
    title: "Cameron Williamson",
    status: "Online",
    active: true,
    chats: "Hey, How are you?",
    img: "assets/images/avtar/3.jpg",
    time: "2 min",
    padding: 15,
    class: "bg-success",
    msg: [
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "Hey, I'm looking to redesign my website. Can you help me?",
        reply: true,
      },
      {
        userName: "Cameron Williamson",
        userimg: "assets/images/avtar/3.jpg",
        userTime: "01:14 PM",
        userText: "Absolutely! I'd be happy to assist you.",
      },
      {
        userName: "Cameron Williamson",
        userimg: "assets/images/avtar/3.jpg",
        userTime: "01:14 PM",
        userText: "What kind of design aesthetic are you aiming for?",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText:
          "I want a clean and modern look with a focus on user experience.?",
        reply: true,
      },
      {
        userName: "Cameron Williamson",
        userimg: "assets/images/avtar/3.jpg",
        userTime: "01:14 PM",
        userText: "Great!  Do you have any specific color schemes in mind?",
        rightside: "right-msg",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "I'm thinking of using a combination of blues and grays.",
        reply: true,
      },
      {
        userName: "Cameron Williamson",
        userimg: "assets/images/avtar/3.jpg",
        userTime: "01:14 PM",
        userText:
          "Excellent choice! Those colors can definitely create a professional.",
        rightside: "right-msg",
      },
    ],
  },
  {
    id: 2,
    name: "Esther Howard",
    title: "Esther Howard",
    status: "Online",
    active: false,
    chats: "Thanks for reply",
    img: "assets/images/avtar/11.jpg",
    time: "7:30 PM",
    class: "bg-success",
    msg: [],
  },
  {
    id: 3,
    name: "Jane Cooper",
    title: "Jane Cooper",
    status: "Online",
    active: false,
    chats: "Hey, What's up?",
    img: "assets/images/avtar/7.jpg",
    time: "2 min",
    class: "bg-success",
    msg: [
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "Hey, I'm looking to redesign my website. Can you help me?",
        reply: true,
      },
      {
        userName: "Jane Cooper",
        userimg: "assets/images/avtar/7.jpg",
        userTime: "01:14 PM",
        userText: "What kind of design aesthetic are you aiming for?",
      },
      {
        userName: "Jane Cooper",
        userimg: "assets/images/avtar/7.jpg",
        userTime: "01:14 PM",
        userText: "Great!  Do you have any specific color schemes in mind?",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText:
          "I want a clean and modern look with a focus on user experience.?",
        reply: true,
      },
      {
        userName: "Jane Cooper",
        userimg: "assets/images/avtar/7.jpg",
        userTime: "01:14 PM",
        userText: "Great!  Do you have any specific color schemes in mind?",
        rightside: "right-msg",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "I'm thinking of using a combination of blues and grays.",
        reply: true,
      },
      {
        userName: "Jane Cooper",
        userimg: "assets/images/avtar/7.jpg",
        userTime: "01:14 PM",
        userText:
          "Excellent choice! Those colors can definitely create a professional.",
        rightside: "right-msg",
      },
    ],
  },
  {
    id: 4,
    name: "Ronald Richards",
    title: "Ronald Richards",
    status: "Online",
    active: false,
    chats: "I'm ready",
    img: "assets/images/avtar/16.jpg",
    time: "13:10 PM",
    class: "bg-success",
    msg: [
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "Hey, I'm looking to redesign my website. Can you help me?",
        reply: true,
      },
      {
        userName: "Ronald Richards",
        userimg: "assets/images/avtar/16.jpg",
        userTime: "01:14 PM",
        userText: "What kind of design aesthetic are you aiming for?",
      },
      {
        userName: "Ronald Richards",
        userimg: "assets/images/avtar/16.jpg",
        userTime: "01:14 PM",
        userText: "Great!  Do you have any specific color schemes in mind?",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText:
          "I want a clean and modern look with a focus on user experience.?",
        reply: true,
      },
      {
        userName: "Ronald Richards",
        userimg: "assets/images/avtar/16.jpg",
        userTime: "01:14 PM",
        userText: "Great!  Do you have any specific color schemes in mind?",
        rightside: "right-msg",
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        otherTime: "01:14 PM",
        otherText: "I'm thinking of using a combination of blues and grays.",
        reply: true,
      },
      {
        otherName: "Esther Howard",
        otherimg: "assets/images/avtar/11.jpg",
        userTime: "01:14 PM",
        userText:
          "Excellent choice! Those colors can definitely create a professional.",
        rightside: "right-msg",
      },
    ],
  },
  {
    id: 5,
    name: "Darlene Robertson",
    title: "Darlene Robertson",
    status: "Busy",
    active: false,
    chats: "Hey, How are you?",
    img: "assets/images/avtar/4.jpg",
    time: "1:30 PM",
    class: "bg-warning",
    msg: [],
  },
  {
    id: 6,
    name: "Darrell Steward",
    title: "Darrell Steward",
    status: "Busy",
    active: false,
    chats: "What's going on?",
    img: "assets/images/blog/comment.jpg",
    time: "2:10 PM",
    class: "bg-warning",
    msg: [],
  },
  {
    id: 7,
    name: "Theresa Webb",
    title: "Theresa Webb",
    status: "Online",
    active: false,
    chats: "What's up?",
    img: "assets/images/blog/4.jpg",
    time: "1:50 AM",
    class: "bg-success",
    msg: [],
  },
  {
    id: 8,
    name: "Floyd Miles",
    active: false,
    status: "Busy",
    chats: "Are you sure?",
    img: "assets/images/blog/12.png",
    time: "5:14 PM",
    class: "bg-warning",
    msg: [],
  },
  {
    id: 9,
    name: "Annette Black",
    status: "Online",
    active: false,
    chats: "Thanks",
    img: "assets/images/blog/9.jpg",
    time: "1:50 PM",
    class: "bg-warning",
    msg: [],
  },
];

export const Contacts: contectsdata[] = [
  {
    id: 1,
    title: "A",
    item: [
      {
        id: 1,
        name: "Andres Williamson",
        number: "191-900-5689",
        img: "assets/images/avtar/3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "B",
    item: [
      {
        id: 2,
        name: "Britlin Weed",
        number: "698-781-5581",
        img: "assets/images/avtar/3.jpg",
      },
      {
        id: 3,
        name: "Brendra Dixit",
        number: "589-789-2563",
        text: "BD",
        class: "secondary",
      },
    ],
  },
  {
    id: 3,
    title: "C",
    item: [
      {
        id: 4,
        name: "Cody Fisher",
        number: "983-333-4545",
        img: "assets/images/blog/14.png",
      },
      {
        id: 5,
        name: "Clifford Evans",
        number: "321-456-7878",
        text: "CE",
        class: "success",
      },
      {
        id: 6,
        name: "Cameron Williamson",
        number: "369-852-7417",
        text: "CW",
        class: "warning",
      },
    ],
  },
  {
    id: 4,
    title: "D",
    item: [
      {
        id: 7,
        name: "Darlene Robertson",
        number: "231-279-1001",
        img: "assets/images/blog/12.png",
      },
      {
        id: 8,
        name: "Dianne Russell",
        number: "569-789-1002",
        img: "assets/images/user/3.png",
      },
      {
        id: 9,
        name: "Darrell Steward",
        number: "200-300-1030",
        img: "assets/images/user/6.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "E",
    item: [
      {
        id: 10,
        name: "Emily Collins",
        number: "100-555-7032",
        img: "assets/images/user/1.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "F",
    item: [
      {
        id: 11,
        name: "Fiona Cooper",
        number: "362-778-1919",
        img: "assets/images/user/2.jpg",
      },
      {
        id: 12,
        name: "Freya Grayson",
        number: "589-789-2563",
        text: "FG",
        class: "danger",
      },
    ],
  },
  {
    id: 7,
    title: "G",
    item: [
      {
        id: 13,
        name: "Gabriel Evans",
        number: "963-147-5024",
        text: "GE",
        class: "warning",
      },
    ],
  },
];

export const massage = [
  {
    id: 1,
    name: "Theresa Webb",
    time: "01:14 PM",
    text: "Hey, I'm looking to redesign my website.Can you help me?",
    side: "left",
  },
  {
    id: 2,
    name: "Darrell Steward",
    time: "12:14 PM",
    text: "Absolutely! I'd be happy to assist you.",
    side: "right",
  },
  {
    id: 3,
    name: "Darrell Steward",
    time: "12:14 PM",
    text: "What kind of design aesthetic are you aiming for?",
    side: "right",
  },
  {
    id: 4,
    name: "Theresa Webb",
    time: "12:14 PM",
    text: "I want a clean and modern look with a focus on user experience.",
    side: "left",
  },
  {
    id: 5,
    name: "Darrell Steward",
    time: "12:14 PM",
    text: "Great! Do you have any specific color schemes in mind?",
    side: "right",
  },
  {
    id: 6,
    name: "Theresa Webb",
    time: "01:14 PM",
    text: "I'm thinking of using a combination of blues and grays.",
    side: "left",
  },
  {
    id: 7,
    name: "Darrell Steward",
    time: "12:14 PM",
    text: "Excellent choice! Those colors can definitely create a professional.",
    side: "right",
  },
];
