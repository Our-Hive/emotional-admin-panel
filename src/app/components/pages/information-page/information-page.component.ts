import { Component } from '@angular/core';
import { InformationPanelComponent } from '@organisms/information-panel/information-panel.component';
import { Information } from 'src/app/information/model/enum/information.enum';

@Component({
  selector: 'app-information-page',
  standalone: true,
  imports: [InformationPanelComponent],
  templateUrl: './information-page.component.html',
  styleUrl: './information-page.component.scss',
})
export class InformationPageComponent {
  information = Information;
}
