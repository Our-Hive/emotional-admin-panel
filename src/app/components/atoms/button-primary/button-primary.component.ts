import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  onClick = input<() => void>();
  text = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
}
