import {Theme} from "../model/enum/theme.enum";

export interface SecondaryEmotionDto {
  name: string;
  description: string;
  color: string;
  theme: Theme;
}
