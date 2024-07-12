import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderItem } from '@organisms/header/model/header.item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerItems: HeaderItem[] = [
    {
      name: 'Información',
      route: '/information',
    },
    {
      name: 'Emociones',
      route: '/emotions',
    },
    {
      name: 'My Space',
      route: '/mySpace',
    },
  ];
}
