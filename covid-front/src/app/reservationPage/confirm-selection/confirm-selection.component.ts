import { ReservationService } from './../reservation.service';
import { Reservation } from './../../shared/dto/Reservation';
import { Component, OnInit } from '@angular/core';

/**
 * Component for the resume page of the reservation registration
 * before confirmation and registration on database.
 *
 * @export
 * @class ConfirmSelectionComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-confirm-selection',
  templateUrl: './confirm-selection.component.html',
  styleUrls: ['./confirm-selection.component.css']
})
export class ConfirmSelectionComponent implements OnInit{


  /**
   * Reservation's infos.
   *
   * @type {Reservation}
   * @memberof ConfirmSelectionComponent
   */
  reservation?: Reservation;


  /**
   * Creates an instance of ConfirmSelectionComponent.
   * @param {ReservationService} reservationService
   * @memberof ConfirmSelectionComponent
   */
  constructor(private reservationService: ReservationService) { }

  /**
   * When the component is initialized, get all infos of the reservation
   * from the reservation service.
   * @memberof ConfirmSelectionComponent
   */
  ngOnInit() {
    this.reservationService.currentReservation.subscribe(reservation => {
      this.reservation = reservation;
    })
  }

  /**
   * Register the reservation to the database.
   *
   * @memberof ConfirmSelectionComponent
   */
  saveReservation(){
    if(this.reservation) this.reservationService.saveReservation(this.reservation);
  }
}
