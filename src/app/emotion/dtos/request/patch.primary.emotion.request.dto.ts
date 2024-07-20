import {Theme} from "../../model/enum/theme.enum";

export interface PatchPrimaryEmotionRequestDto {
  description: string;
  color: string;
  theme: Theme;
}
