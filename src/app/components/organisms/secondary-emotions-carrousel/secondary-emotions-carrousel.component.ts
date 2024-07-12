import { Component } from '@angular/core';
import { ButtonAddComponent } from '@atoms/button-add/button-add.component';
import { CardEmotionComponent } from '@molecules/card-emotion/card-emotion.component';

@Component({
  selector: 'app-secondary-emotions-carrousel',
  standalone: true,
  imports: [CardEmotionComponent, ButtonAddComponent],
  templateUrl: './secondary-emotions-carrousel.component.html',
  styleUrl: './secondary-emotions-carrousel.component.scss',
})
export class SecondaryEmotionsCarrouselComponent {
  emotions = [
    {
      id: 1,
      name: 'Felicidad',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'yellow',
    },
    {
      id: 2,
      name: 'Tristeza',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'blue',
    },
    {
      id: 3,
      name: 'Enojo',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'red',
    },
    {
      id: 4,
      name: 'Miedo',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'violet',
    },
    {
      id: 5,
      name: 'Sorpresa',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'pink',
    },
    {
      id: 6,
      name: 'Asco',
      description: `lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `,
      color: 'green',
    },
  ];
}
