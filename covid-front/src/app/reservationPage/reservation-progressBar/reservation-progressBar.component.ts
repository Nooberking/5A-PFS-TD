import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-progressBar',
  templateUrl: './reservation-progressBar.component.html',
  styleUrls: ['./reservation-progressBar.component.css']
})
export class ReservationProgressBarComponent {

  @Input()
  progress: number = 0;
  subscription?: Subscription;


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
