export interface Profile {
  data: Data;
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}