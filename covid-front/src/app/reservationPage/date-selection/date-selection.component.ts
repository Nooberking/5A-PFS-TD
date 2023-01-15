import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReservationService } from './../reservation.service';
import { Reservation } from './../../shared/dto/Reservation';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * Component that contains the whole page for the date' selection process.
 *
 * @export
 * @class DateSelectionComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.css']
})
export class DateSelectionComponent implements OnInit, OnDestroy {
  /**
   * Reservation's infos
   * @type {Reservation}
   * @memberof DateSelectionComponent
   */
  reservation?: Reservation;
  /**
   *@ignore
   *
   * @type {Subscription}
   * @memberof DateSelectionComponent
   */
  subscription?: Subscription;
  /**
   * Selected date.
   *
   * @type {Date}
   * @memberof DateSelectionComponent
   */
  date?: Date;
  /**
   * @ignore
   * @type {Date}
   * @memberof DateSelectionComponent
   */
  today: Date = new Date();
  /**
   * Form control to manage the date requirement.
   * @type {FormControl}
   * @memberof DateSelectionComponent
   */
  dateFormControl: FormControl = new FormControl('',[Validators.required]);
  /**
   * boolean to disable the next button.
   *
   * @type {boolean}
   * @memberof DateSelectionComponent
   */
  disabled: boolean = true;
  /**
   * Boolean for if this phase was already completed before.
   * @type {boolean}
   * @memberof DateSelectionComponent
   */
  alreadyPassed: boolean = false;

  /**
   * Activates the confirm button for a valid date.
   *
   * @param {*} event
   * @memberof DateSelectionComponent
   */
  enableConfirm(event: any) : void{
     this.disabled = !event.value;
    }

  /**
   * @ignore
   *
   * @param {(Date | null)} d
   * @memberof DateSelectionComponent
   */
  filterDate = (d: Date | null): boolean =>{
    const day = (d || new Date()).getDay();
    return day !==0;
  }

  /**
   * Creates an instance of DateSelectionComponent.
   * @param {ReservationService} reservationService
   * @memberof DateSelectionComponent
   */
  constructor(private reservationService: ReservationService) { }

  /**
   * @ignore
   *
   * @memberof DateSelectionComponent
   */
  ngOnInit() {
    this.subscription = this.reservationService.currentReservation.subscribe(reservation =>this.reservation = reservation );
  }

  /**
   * Changes the selected date.
   *
   * @param {MatDatepickerInputEvent<Date>} event
   * @memberof DateSelectionComponent
   */
  changeDate(event: MatDatepickerInputEvent<Date>):void{
    this.date = event.value ? event.value : undefined;
  }

  /**
   * Register the selected date on the reservation.
   *
   * @memberof DateSelectionComponent
   */
  selectDate(){
    if(this.date)this.reservationService.updateReservationDate(this.date);
    if(!this.alreadyPassed){
      this.reservationService.updateReservationState(1);
      this.alreadyPassed = true;
    }
  }


  /**
   * @ignore
   *
   * @memberof DateSelectionComponent
   */
  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }


}
