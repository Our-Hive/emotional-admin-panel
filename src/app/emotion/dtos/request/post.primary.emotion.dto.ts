import {SecondaryEmotionDto} from "../secondaryEmotionDto";

export interface PostPrimaryEmotionDto {
  name: string;
  description: string;
  color: string;
  theme: string;
  secondaryEmotions: SecondaryEmotionDto[];
}
