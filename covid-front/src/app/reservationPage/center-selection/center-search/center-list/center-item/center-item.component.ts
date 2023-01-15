import { ReservationService } from './../../../../reservation.service';
import { VaccinationCenter } from './../../../../../shared/dto/VaccinationCenter';
import { Component, Input } from '@angular/core';

/**
 * Component for a Center item on the Center list.
 *
 * @export
 * @class CenterItemComponent
 */
@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.component.html',
  styleUrls: ['./center-item.component.css']
})
export class CenterItemComponent {
  /**
   * Center informations.
   *
   * @type {VaccinationCenter}
   * @memberof CenterItemComponent
   */
  @Input()
  center!: VaccinationCenter;

  /**
   * Boolean for center selection and appearance of the cconfirm button.
   *
   * @type {boolean}
   * @memberof CenterItemComponent
   */
  buttonConfirm: boolean = false;
  /**
   * Boolean if it's the first center selection for the progressBar.
   *
   * @memberof CenterItemComponent
   */
  alreadyPassed = false;

  /**
   * Creates an instance of CenterItemComponent.
   * @param {ReservationService} reservationService
   * @memberof CenterItemComponent
   */
  constructor(private reservationService: ReservationService) { }

  /**
   * Make appear/desappear the confirm button according to the selection of the center.
   *
   * @memberof CenterItemComponent
   */
  confirmButton(): void{
    this.buttonConfirm = !this.buttonConfirm;
  }

  /**
   * Save the selected Center on the reservation.
   *
   * @memberof CenterItemComponent
   */
  selectCenter():void{
    this.reservationService.updateReservationCenter(this.center);
    if(!this.alreadyPassed){
      this.reservationService.updateReservationState(0);
      this.alreadyPassed = true;
    }
  }
}
