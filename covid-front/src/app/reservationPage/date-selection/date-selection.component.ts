import { ReservationService } from './../reservation.service';
import { Reservation } from './../../shared/dto/Reservation';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.css']
})
export class DateSelectionComponent implements OnInit, OnDestroy {
  reservation?: Reservation;
  subscription?: Subscription;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.subscription = this.reservationService.currentReservation.subscribe(reservation =>this.reservation = reservation );
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe(); 
  }


}
