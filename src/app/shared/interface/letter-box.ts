export interface letterBox {
  id: number;
  title: string;
  value: string;
  icon: string;
  badge: boolean;
  badgeText?: number;
  details: mailDetails[];
}

export interface mailDetails {
  id: number;
  userName: string;
  check?: boolean;
  userProfile?: string;
  userProfileText?: string;
  profileColor?: string;
  title: string;
  subTitle: string;
  time: string;
  tag: boolean;
  tagList?: {
    tagText: string;
    tagColor: string;
  }[];
  tagText?: string;
  tagColor?: string;
  favorite: boolean;
  mailOpen?: boolean;
}
