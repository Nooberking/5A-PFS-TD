import { UnsavedChanges } from '../shared/guards/CanDesactivate.guard';
import { ReservationService } from './reservation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

/**
 * Component for the reservation page template.
 *
 * @export
 * @class ReservationPageComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {UnsavedChanges}
 */
@Component({
  selector: 'app-reservationPage',
  templateUrl: './reservationPage.component.html',
  styleUrls: ['./reservationPage.component.css']
})
export class ReservationPageComponent implements OnInit, OnDestroy, UnsavedChanges {

  /**
   *
   * Progression rate for the progress bar.
   * @type {number}
   * @memberof ReservationPageComponent
   */
  progress: number = 0;
  /**
   * @ignore
   *
   * @type {Subscription[]}
   * @memberof ReservationPageComponent
   */
  subscriptions: Subscription[] = [];

  /**
   * Creates an instance of ReservationPageComponent.
   * @param {ReservationService} reservationService
   * @memberof ReservationPageComponent
   */
  constructor(
    private reservationService: ReservationService) { }

  /**
   * Initiates the component and set the progression to 0.
   *
   * @memberof ReservationPageComponent
   */
  ngOnInit() {

    this.subscriptions.push(this.reservationService.currentReservationState.subscribe(
      reservationState=>{
        this.progress = 0;
        reservationState.forEach(state => {
          this.progress += +state * 25;
        });
      }
    ));

  }

  /**
   *
   * Creates a confirmation popup to change the page if the reload occurs
   * or if we decide to quit the page.
   * @param {*} $event
   * @memberof ReservationPageComponent
   */
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event: any){
    $event.returnValue = true;
  }

  /**
   * Function for DesactivateGuard : Creates a confirm popup when this component is desactivated.
   * @return {*}  {boolean}
   * @memberof ReservationPageComponent
   */
  unsavedChanges(): boolean {
    if (this.progress == 0) return true;
    this.reservationService.resetReservation();
    return this.progress!=100 && confirm("Vous avez des changements non sauvegardés ! Si vous quittez, vos changements seront perdus.") ;
  }

  /**
   * @ignore
   *
   * @memberof ReservationPageComponent
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe());
  }





}
