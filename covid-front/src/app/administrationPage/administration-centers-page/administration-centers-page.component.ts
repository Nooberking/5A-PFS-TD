import { VaccinationCenter } from './../../shared/dto/VaccinationCenter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administration-centers-page',
  templateUrl: './administration-centers-page.component.html',
  styleUrls: ['./administration-centers-page.component.css']
})
export class AdministrationCentersPageComponent {

  centers: VaccinationCenter[] = [];

}
