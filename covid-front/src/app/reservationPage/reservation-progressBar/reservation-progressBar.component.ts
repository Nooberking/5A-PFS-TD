import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-progressBar',
  templateUrl: './reservation-progressBar.component.html',
  styleUrls: ['./reservation-progressBar.component.css']
})
export class ReservationProgressBarComponent implements OnInit {

  progress?: number;

  constructor() { }

  ngOnInit() {
    this.progress = 0;
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
