import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-contact-lines',
  standalone: true,
  imports: [],
  templateUrl: './card-contact-lines.component.html',
  styleUrl: './card-contact-lines.component.scss',
})
export class CardContactLinesComponent {
  title = input.required<string>();
  description = input.required<string>();
}
