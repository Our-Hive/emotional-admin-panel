import { Component, input } from '@angular/core';
import { ButtonAddComponent } from '../../atoms/button-add/button-add.component';
import { ButtonEditComponent } from '../../atoms/button-edit/button-edit.component';

@Component({
  selector: 'app-primary-emotion-section',
  standalone: true,
  imports: [ButtonAddComponent, ButtonEditComponent],
  templateUrl: './primary-emotion-section.component.html',
  styleUrl: './primary-emotion-section.component.scss',
})
export class PrimaryEmotionSectionComponent {
  title = input.required<string>();
  description = input.required<string>();
  color = input.required<string>();
}
