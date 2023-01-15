import { VaccinationCenter } from './../../shared/dto/VaccinationCenter';
import { Component } from '@angular/core';
import { CenterSearchEnum } from './CenterSearchEnum.enum';

/**
 * Component that contains the center selection phase of
 * the reservation register process.
 *
 * @export
 * @class CenterSelectionComponent
 */
@Component({
  selector: 'app-center-selection',
  templateUrl: './center-selection.component.html',
  styleUrls: ['./center-selection.component.css']
})
export class CenterSelectionComponent {

  /**
   * Select search option.
   *
   * @type {CenterSearchEnum}
   * @memberof CenterSelectionComponent
   */
  selectedOption?: CenterSearchEnum ;
  /**
   * List of centers.
   *
   * @type {VaccinationCenter[]}
   * @memberof CenterSelectionComponent
   */
  centers: VaccinationCenter[] = [];




  /**
   * Function to change the selected search option.
   *
   * @param {CenterSearchEnum} option
   * @memberof CenterSelectionComponent
   */
  changeSelectedOption(option: CenterSearchEnum){
    this.selectedOption = option;
  }


}
