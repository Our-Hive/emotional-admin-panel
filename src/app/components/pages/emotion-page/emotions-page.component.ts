import { Component } from '@angular/core';
import { EmotionBoardComponent } from '@organisms/emotion-board/emotion-board.component';
import { SecondaryEmotionsCarrouselComponent } from "../../organisms/secondary-emotions-carrousel/secondary-emotions-carrousel.component";

@Component({
  selector: 'app-emotion',
  standalone: true,
  imports: [EmotionBoardComponent, SecondaryEmotionsCarrouselComponent],
  templateUrl: './emotions-page.component.html',
  styleUrl: './emotions-page.component.scss',
})
export class EmotionsPageComponent {}
