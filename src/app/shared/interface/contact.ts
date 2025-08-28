export interface contacts {
  id: number;
  title: string;
  value?: string;
  type: string;
  totalContact?: number;
  data?: contactDetails[];
}

export interface contactDetails {
  id: number;
  active: boolean;
  img: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: string;
  personality?: string;
  city?: string;
  mobile?: string;
  email: string;
  website?: string;
  interest?: string;
}
