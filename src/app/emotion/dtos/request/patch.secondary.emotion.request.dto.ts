import {Theme} from "../../model/enum/theme.enum";

export interface PatchSecondaryEmotionRequestDto {
  description: string;
  color: string;
  theme: Theme;
}
