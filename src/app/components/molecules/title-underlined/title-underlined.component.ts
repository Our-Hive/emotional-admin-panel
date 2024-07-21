import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-underlined',
  standalone: true,
  imports: [],
  templateUrl: './title-underlined.component.html',
  styleUrl: './title-underlined.component.scss',
})
export class TitleUnderlinedComponent {
  title = input.required<string>();
  lineColor = input<string>('white');
  titleColor = input<string>('white');
}
