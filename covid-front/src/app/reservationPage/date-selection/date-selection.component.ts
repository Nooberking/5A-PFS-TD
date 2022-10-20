import { MatDatepickerInputEvent } from '@angular/material/datepicker';
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
  date?: Date;
  today: Date = new Date();
  disabled: boolean = true;

  enableConfirm(event: any) : void{
     this.disabled = !event.value;
    }

  filterDate = (d: Date | null): boolean =>{
    const day = (d || new Date()).getDay();
    return day !==0;
  }

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.subscription = this.reservationService.currentReservation.subscribe(reservation =>this.reservation = reservation );
  }

  changeDate(event: MatDatepickerInputEvent<Date>):void{
    this.date = event.value ? event.value : undefined;
  }

  selectDate(){
    if(this.date)this.reservationService.updateReservationDate(this.date);
  }


  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }


}
