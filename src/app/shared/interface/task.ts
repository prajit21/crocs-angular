export interface task {
  id: number;
  title: string;
  value: string;
  type: string;
  data: taskDetails[];
}

export interface taskDetails {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}
