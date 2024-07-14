import {SecondaryEmotionDto} from "../secondaryEmotionDto";

export interface PostPrimaryEmotionRequestDto {
  name: string;
  description: string;
  color: string;
  theme: string;
  secondaryEmotions: SecondaryEmotionDto[];
}
