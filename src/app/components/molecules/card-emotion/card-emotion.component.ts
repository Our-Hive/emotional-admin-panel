import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-emotion',
  standalone: true,
  imports: [],
  templateUrl: './card-emotion.component.html',
  styleUrl: './card-emotion.component.scss',
})
export class CardEmotionComponent {
  emotion = input.required<string>();
  description = input.required<string>();
  color = input.required<string>();
}
