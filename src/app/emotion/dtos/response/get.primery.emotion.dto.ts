import {GetSecondaryEmotionDto} from "./get.secondary.emotion.dto";

export interface GetPrimaryEmotionDto {
  name: string;
  description: string;
  color: string;
  theme: string;
  secondaryEmotions: GetSecondaryEmotionDto[] | null;
}
