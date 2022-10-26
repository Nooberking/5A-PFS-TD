import { ReservationService } from './../reservation.service';
import { Reservation } from './../../shared/dto/Reservation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-selection',
  templateUrl: './confirm-selection.component.html',
  styleUrls: ['./confirm-selection.component.css']
})
export class ConfirmSelectionComponent implements OnInit{


  reservation?: Reservation;


  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.currentReservation.subscribe(reservation => {
      this.reservation = reservation;
    })
  }

  saveReservation(){
    if(this.reservation) this.reservationService.saveReservation(this.reservation);
  }
}
