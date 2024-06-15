import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '@atoms/button-primary/button-primary.component';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonPrimaryComponent, FormFieldComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {}
