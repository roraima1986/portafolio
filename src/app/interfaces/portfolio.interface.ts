export interface Portfolio {
  id:number;
  photo?:        string;
  title:         string;
  skill:         string[];
  date_project:  Date;
  observation?:  string;
  link_github?:  string;
  link_website?: string;
  is_active:     boolean;
}


