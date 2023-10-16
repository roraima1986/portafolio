import { Skill } from "./skill.interface";

export interface About {
  id:           number;
  name:         string;
  photo?:       string;
  description:  string;
  skill:        Skill[];
  is_published: boolean;
}

