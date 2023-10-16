import { Skill } from "./skill.interface";

export interface Work {
  id:number;
  photo?:        string;
  title:         string;
  skill:         Skill[];
  date_project:  Date;
  observation?:  string;
  link_github?:  string;
  link_website?: string;
  is_work:       boolean;
  is_design:     boolean;
  is_active:     boolean;
}


