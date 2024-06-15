import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  type = input.required<string>();
  placeholder = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
}
