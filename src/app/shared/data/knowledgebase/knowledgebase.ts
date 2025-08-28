export interface knowledgebase {
  title: string;
  colClass: string;
  desc: string;
  icon: string;
}

export interface featuredTutorial {
  id: number;
  rating: number;
  img: string;
  post: string;
  desc: string;
  date: string;
}

export interface articlesAndVideos {
  row: number;
  data: {
    id: number;
    icon: string;
    title: string;
    desc: string;
  }[];
}
[];

export const knowledgebaseData: knowledgebase[] = [
  {
    title: "Articles",
    colClass: "",
    desc: "How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day.",
    icon: "book-open",
  },
  {
    title: "Knowledgebase",
    colClass: "col-sm-6",
    desc: "A Website Designing course enables learners to use essential and designing and programming tools required to do the job. The curriculum is a blend of various themes.",
    icon: "aperture",
  },
  {
    title: "Support",
    colClass: "col-sm-6",
    desc: "The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy.",
    icon: "file-text",
  },
];

export const featuredTutorialData: featuredTutorial[] = [
  {
    id: 1,
    rating: 5,
    img: "assets/images/faq/1.jpg",
    post: "Web Design",
    desc: "A Web Designing course belongs to the field of Computer It enables students to learn various techniques.",
    date: "Dec 15, 2024",
  },
  {
    id: 2,
    rating: 4,
    img: "assets/images/faq/2.jpg",
    post: "Web Development",
    desc: "A Web Development course belongs to the field of Computer It enables students to learn various techniques.",
    date: "Dec 15, 2024",
  },
  {
    id: 3,
    rating: 5,
    img: "assets/images/faq/3.jpg",
    post: "UI Design",
    desc: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
    date: "Dec 15, 2024",
  },
  {
    id: 4,
    rating: 4.5,
    img: "assets/images/faq/4.jpg",
    post: "UX Design",
    desc: "User Experience design (UX) is the design for machines and software, such as mobile devices, computers.",
    date: "Dec 15, 2024",
  },
];

export const articlesAndVideosData: articlesAndVideos[] = [
  {
    row: 1,
    data: [
      {
        id: 1,
        icon: "codepen",
        title: "Article Base Video",
        desc: "The web is a very big place, and if you are the typical internet base user.",
      },
      {
        id: 2,
        title: "Knows your sources",
        icon: "codepen",
        desc: "A book giving information on many subjects or on many aspects of one subject.",
      },
      {
        id: 3,
        title: "Sources credible/reliable",
        icon: "codepen",
        desc: "Simple demos of frequently asked questions about using the information resources",
      },
    ],
  },
  {
    row: 2,
    data: [
      {
        id: 4,
        title: "Validate website",
        icon: "file-text",
        desc: "Website is the process of ensuring that the pages on the website conform.",
      },
      {
        id: 5,
        title: "Tailwind Design",
        icon: "file-text",
        desc: "Tailwind is so low-level, it never encourages you to design the same site twice.",
      },
      {
        id: 6,
        title: "Knows your sources",
        icon: "file-text",
        desc: "A book giving information on many subjects or on many aspects of one subject.",
      },
    ],
  },
  {
    row: 3,
    data: [
      {
        id: 7,
        title: "Sources Demos",
        icon: "youtube",
        desc: "Simple demos of frequently asked questions about using the information resources",
      },
      {
        id: 8,
        title: "Validate Html",
        icon: "youtube",
        desc: "Website is the process of ensuring that the pages on the website conform.",
      },
      {
        id: 9,
        title: "Web Design",
        icon: "youtube",
        desc: "Web is so high-level, it never encourages you to design the same site twice",
      },
    ],
  },
];

export const browseArticlesData = [
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 40,
    title: "Any other legal pages I should know about?",
    titleIcon: "archive",
    data: [
      {
        listData: "They are best treated with common sense.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Policies have wide acceptance editors.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Guidelines are sets of best practices supported.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "New",
      },
      {
        listData: "Editors should attempt to follow guidelines,",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 90,
    title: "Does Moment have an API or automatic export?",
    titleIcon: "archive",
    data: [
      {
        listData: "API allows search and download AP Images.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Review",
      },
      {
        listData: "API retrieve breaking news categories.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "API retrieves rules for fantasy league.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Articles",
      },
      {
        listData: "Resource API retrieves content produced business.",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 50,
    title: "How do WordPress Site Maintenance?",
    titleIcon: "archive",
    data: [
      {
        listData: "Make a backup of your WordPress website.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Run a Wordpress security Website check",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Closed",
      },
      {
        listData: "Monitor your search engine optimization",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Set a regular maintenance schedule.",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 90,
    title: "Can I change my plan later?",
    titleIcon: "archive",
    data: [
      {
        listData: "When an unknown printer took a galley",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Popular",
      },
      {
        listData: "You can easily change plans at any time.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "you’ll be charged a prorated cover that upgrade.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "But also the leap into electronic typesetting,",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 50,
    title: "How do I pay for the Premium Plan?",
    titleIcon: "archive",
    data: [
      {
        listData: "Premium plans are billed as a single yearly payment.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Monthly plan are bill every month of signup.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "You can set Monthly or Yearly for Premium plan",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "unknown printer took galley.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Closed",
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 26,
    title: "What is your Shopping Policy",
    titleIcon: "archive",
    data: [
      {
        listData: "Many new editors rely on policy interpretations.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Editor continually attempts to find a different policy.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Violation of maintaining a neutral point of view.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Article",
      },
      {
        listData: "You double check your sources.",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 10,
    title: "How can I change the component?",
    titleIcon: "archive",
    data: [
      {
        listData: "You can modify some specific component settings.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Review",
      },
      {
        listData: "Click Apply to validate the set preferences.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Following procedure apply the components",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Closed",
      },
      {
        listData: "To modify those specific components settings.",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-50 col-md-6",
    seeMore: 21,
    title: "How does it work?",
    titleIcon: "archive",
    data: [
      {
        listData: "To get started with your account.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Compile your theme using gulp",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Popular",
      },
      {
        listData: "Users can browse by topic or use the visually.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "Review",
      },
      {
        listData: "This works through various methods of site tracking",
        dataIcon: "file-text",
        tag: false,
      },
    ],
  },
  {
    colClass: "col-xl-4 xl-100",
    seeMore: 34,
    title: "Integrating WordPress with Your Website",
    titleIcon: "archive",
    data: [
      {
        listData: "Language regular existing languages.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Lorem has been the industry standard dummy.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "Language is not real even ‘Lorem’ does't exist.",
        dataIcon: "file-text",
        tag: false,
      },
      {
        listData: "dummy text that is not meant anything.",
        dataIcon: "file-text",
        tag: true,
        tagTitle: "On hold",
      },
    ],
  },
];
