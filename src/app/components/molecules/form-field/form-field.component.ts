import { Component, input } from '@angular/core';
import { InputComponent } from '@atoms/input/input.component';
import { LabelComponent } from '@atoms/label/label.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [InputComponent, LabelComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  inputType = input.required<string>();
  label = input<string>();
  inputPlaceholder = input.required<string>();
  name = input.required<string>();
  for = input.required<string>();
}
