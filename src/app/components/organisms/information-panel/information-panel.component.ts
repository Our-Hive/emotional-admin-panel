import { Component, input } from '@angular/core';
import { TitleUnderlinedComponent } from '@molecules/title-underlined/title-underlined.component';
import { Information } from '../../../information/model/enum/information.enum';
import { ButtonAddComponent } from '@atoms/button-add/button-add.component';
import { GetRecommendedContentResponseDto } from 'src/app/recommended-content/dtos/response/get.recommended.content.response.dto';
import { GetContactLineResponseDto } from 'src/app/contact-line/dtos/response/get.contact.line.response.dto';
import { CardContactLinesComponent } from '@molecules/card-contact-lines/card-contact-lines.component';
import { CardRecommendedContentComponent } from '@molecules/card-recommended-content/card-recommended-content.component';

@Component({
  selector: 'app-information-panel',
  standalone: true,
  imports: [
    TitleUnderlinedComponent,
    ButtonAddComponent,
    CardContactLinesComponent,
    CardRecommendedContentComponent,
  ],
  templateUrl: './information-panel.component.html',
  styleUrl: './information-panel.component.scss',
})
export class InformationPanelComponent {
  type = input<Information>(Information.RecommendedContent);
  informationType = Information;

  content = {
    title: 'Contenido Recomendado',
    titleColor: '#edff05',
    lineColor: '#edff05',
    addColor: '#862297',
  };

  contactLines = {
    title: 'Líneas de Contacto',
    titleColor: '#fd8167',
    lineColor: '#fd8167',
    addColor: '#fd8167',
  };
  recommendedData: GetRecommendedContentResponseDto[] = [
    {
      id: '1',
      title: 'title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur malesuada elementum. Nam id fermentum erat. Nam ornare, magna non tincidunt mattis, lacus purus tempus lorem, sed tincidunt arcu erat faucibus ex. Integer bibendum risus id elementum gravida. Fusce imperdiet suscipit nulla ut molestie. Etiam quis mollis nibh. Donec scelerisque tellus velit, at malesuada mauris auctor porttitor. Ut placerat mauris eu orci interdum, non condimentum dolor egestas. Cras a porttitor elit. Donec elit odio, sodales quis dui ac, condimentum facilisis mi.',
      url: 'www.google.com',
    },
    {
      id: '2',
      title: 'title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur malesuada elementum. Nam id fermentum erat. Nam ornare, magna non tincidunt mattis, lacus purus tempus lorem, sed tincidunt arcu erat faucibus ex. Integer bibendum risus id elementum gravida. Fusce imperdiet suscipit nulla ut molestie. Etiam quis mollis nibh. Donec scelerisque tellus velit, at malesuada mauris auctor porttitor. Ut placerat mauris eu orci interdum, non condimentum dolor egestas. Cras a porttitor elit. Donec elit odio, sodales quis dui ac, condimentum facilisis mi.',
      url: 'www.google.com',
    },
  ];
  contactLinesData: GetContactLineResponseDto[] = [
    {
      id: '1',
      name: 'Numero de Contacto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur malesuada elementum. Nam id fermentum erat. Nam ornare, magna non tincidunt mattis, lacus purus tempus lorem, sed tincidunt arcu erat faucibus ex. Integer bibendum risus id elementum gravida. Fusce imperdiet suscipit nulla ut molestie. Etiam quis mollis nibh. Donec scelerisque tellus velit, at malesuada mauris auctor porttitor. Ut placerat mauris eu orci interdum, non condimentum dolor egestas. Cras a porttitor elit. Donec elit odio, sodales quis dui ac, condimentum facilisis mi.',
    },
    {
      id: '2',
      name: 'Numero de contacto 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur malesuada elementum. Nam id fermentum erat. Nam ornare, magna non tincidunt mattis, lacus purus tempus lorem, sed tincidunt arcu erat faucibus ex. Integer bibendum risus id elementum gravida. Fusce imperdiet suscipit nulla ut molestie. Etiam quis mollis nibh. Donec scelerisque tellus velit, at malesuada mauris auctor porttitor. Ut placerat mauris eu orci interdum, non condimentum dolor egestas. Cras a porttitor elit. Donec elit odio, sodales quis dui ac, condimentum facilisis mi.',
    },
  ];
}
