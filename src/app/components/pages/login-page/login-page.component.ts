import { ImageOurHiveComponent } from '@atoms/image-our-hive/image-our-hive.component';
import { LoginFormComponent } from '@organisms/login-form/login-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ImageOurHiveComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
