import {SecondaryEmotionDto} from "../secondary.emotion.dto";
import {Theme} from "../../model/enum/theme.enum";

export interface GetPrimaryEmotionResponseDto {
  name: string;
  description: string;
  color: string;
  theme: Theme;
  secondaryEmotions: SecondaryEmotionDto[] | null;
}
