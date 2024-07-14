import {SecondaryEmotionDto} from "../secondaryEmotionDto";

export interface GetPrimaryEmotionDto {
  name: string;
  description: string;
  color: string;
  theme: string;
  secondaryEmotions: SecondaryEmotionDto[] | null;
}
