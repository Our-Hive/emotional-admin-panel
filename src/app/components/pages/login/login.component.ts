import { ImageOurHiveComponent } from '@atoms/image-our-hive/image-our-hive.component';
import { LoginFormComponent } from '@organisms/login-form/login-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImageOurHiveComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
