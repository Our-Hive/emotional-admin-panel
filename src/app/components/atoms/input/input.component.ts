import { Component, Input, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  type = input.required<string>();
  placeholder = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  @Input({
    required: true,
  })
  control!: FormControl;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.control.setValue(target.value);
  }
}
