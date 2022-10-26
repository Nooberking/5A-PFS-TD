import { ReservationService } from './../reservation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-progressBar',
  templateUrl: './reservation-progressBar.component.html',
  styleUrls: ['./reservation-progressBar.component.css']
})
export class ReservationProgressBarComponent implements OnInit {

  @Input()
  progress: number = 0;
  subscription?: Subscription;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {

  }

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
