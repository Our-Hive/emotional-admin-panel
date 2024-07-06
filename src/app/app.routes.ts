import {Routes} from '@angular/router';
import {LoginComponent} from '@pages/login/login.component';
import {HomeComponent} from "@pages/home/home.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
