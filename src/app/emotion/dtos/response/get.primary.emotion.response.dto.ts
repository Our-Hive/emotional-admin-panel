import {SecondaryEmotionDto} from "../secondaryEmotionDto";

export interface GetPrimaryEmotionResponseDto {
  name: string;
  description: string;
  color: string;
  theme: string;
  secondaryEmotions: SecondaryEmotionDto[] | null;
}
