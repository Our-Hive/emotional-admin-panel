import {Theme} from "../../model/enum/theme.enum";

export interface PostSecondaryEmotionRequestDto {
  name: string;
  description: string;
  color: string;
  theme: Theme;
  primaryEmotion: string;
}
