import { VaccinationCenter } from './../../../../shared/dto/VaccinationCenter';
import { Component, Input } from '@angular/core';

/**
 * Component that describes the center list template.
 *
 * @export
 * @class CenterListComponent
 */
@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent {

  /**
   * Centers Informations.
   *
   * @type {VaccinationCenter[]}
   * @memberof CenterListComponent
   */
  @Input()
  centers?: VaccinationCenter[];
  /**
   * Boolean if the we're loading center's informations.
   *
   * @type {boolean}
   * @memberof CenterListComponent
   */
  @Input()
  loading?: boolean;

}
