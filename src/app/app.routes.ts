import {Routes} from '@angular/router';
import {LoginComponent} from '@pages/login/login.component';
import {HomeComponent} from "@pages/home/home.component";
import {DashboardComponent} from "@templates/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
