import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss',
})
export class ButtonAddComponent {
  backgroundColor = input.required<string>();
  iconColor = input<string>();
}
