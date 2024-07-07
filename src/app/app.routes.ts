import {Routes} from '@angular/router';
import {LoginComponent} from '@pages/login/login.component';
import {EmotionsComponent} from "@pages/emotion/emotions.component";
import {DashboardComponent} from "@templates/dashboard/dashboard.component";
import {InformationComponent} from "@pages/information/information.component";

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
        path: 'emotions',
        component: EmotionsComponent,
      },
      {
        path: 'information',
        component: InformationComponent,
      }
    ],
  },
];
