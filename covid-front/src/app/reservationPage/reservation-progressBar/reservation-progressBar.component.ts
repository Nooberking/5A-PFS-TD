import { Component, Input } from '@angular/core';

/**
 * Component for the proggression bar that represent the progression on
 * on the reservation process.
 *
 * @export
 * @class ReservationProgressBarComponent
 */
@Component({
  selector: 'app-reservation-progressBar',
  templateUrl: './reservation-progressBar.component.html',
  styleUrls: ['./reservation-progressBar.component.css']
})
export class ReservationProgressBarComponent {

  /**
   * Progression rate.
   *
   * @type {number}
   * @memberof ReservationProgressBarComponent
   */
  @Input()
  progress: number = 0;


  /**
   * Permet l'itération sur un nombre pour le ngFor.
   *
   * @param {number} n
   * @return {*}  {Array<number>}
   * @memberof ReservationProgressBarComponent
   */
  iterations(n: number) : Array<number>{
    return Array(n);
  }

}
