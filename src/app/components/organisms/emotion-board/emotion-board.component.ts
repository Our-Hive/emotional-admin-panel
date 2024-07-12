import { Component } from '@angular/core';
import { PrimaryEmotionSectionComponent } from '@molecules/primary-emotion-section/primary-emotion-section.component';
import { SecondaryEmotionsCarrouselComponent } from '@organisms/secondary-emotions-carrousel/secondary-emotions-carrousel.component';

@Component({
  selector: 'app-emotion-board',
  standalone: true,
  imports: [
    PrimaryEmotionSectionComponent,
    SecondaryEmotionsCarrouselComponent,
  ],
  templateUrl: './emotion-board.component.html',
  styleUrl: './emotion-board.component.scss',
})
export class EmotionBoardComponent {}
