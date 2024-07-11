import {Routes} from '@angular/router';
import {LoginPageComponent} from './components/pages/login-page/login-page.component';
import {EmotionsPageComponent} from "./components/pages/emotion-page/emotions-page.component";
import {DashboardComponent} from "@templates/dashboard/dashboard.component";
import {InformationPageComponent} from "./components/pages/information-page/information-page.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'emotions',
        component: EmotionsPageComponent,
      },
      {
        path: 'information',
        component: InformationPageComponent,
      }
    ],
  },
];
