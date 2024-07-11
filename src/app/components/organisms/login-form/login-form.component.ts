import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonPrimaryComponent } from '@atoms/button-primary/button-primary.component';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PostAuthRequestDto } from '../../../auth/dtos/request/post.auth.request.dto';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ButtonPrimaryComponent,
    FormFieldComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
  }
  login() {
    const { email, password } = this.loginForm.value;
    this.authService
      .login({ email, password } as PostAuthRequestDto)
      .subscribe({
        next: async (response) => {
          alert('Login successful');
          await this.router.navigate(['/emotions']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  onValueChange(controlName: string, value: string) {
    this.loginForm.get(controlName)?.setValue(value);
  }
}
