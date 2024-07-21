import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-recommended-content',
  standalone: true,
  imports: [],
  templateUrl: './card-recommended-content.component.html',
  styleUrl: './card-recommended-content.component.scss',
})
export class CardRecommendedContentComponent {
  title = input.required<string>();
  description = input.required<string>();
  link = input.required<string>();
  linkText = input.required<string>();
}
