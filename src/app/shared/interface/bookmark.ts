export interface bookmarkDetails {
  id: number;
  title: string;
  value: string;
  type: string;
  data: bookmarks[];
}

export interface bookmarks {
  id: number;
  image: string;
  title: string;
  url: string;
  desc: string;
  collection: string;
  favorite?: boolean;
}
