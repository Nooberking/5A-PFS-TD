import { UnsavedChanges } from './../shared/guards/CanDesactivateGuard';
import { ReservationService } from './reservation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-reservationPage',
  templateUrl: './reservationPage.component.html',
  styleUrls: ['./reservationPage.component.css']
})
export class ReservationPageComponent implements OnInit, OnDestroy, UnsavedChanges {

  progress: number = 0;
  subscriptions: Subscription[] = [];

  constructor(
    private reservationService: ReservationService) { }

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
   * Permet d'afficher une popup de confirmation de changer la page
   * si rechargement de la page ou si l'on décide de quitter la page.
   * @param {*} $event
   * @memberof ReservationPageComponent
   */
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event: any){
    $event.returnValue = true;
  }

  unsavedChanges(): boolean {

    if (this.progress == 0) return true;
    this.reservationService.resetReservation();
    return this.progress!=100 &&  confirm("Vous avez des changements non sauvegardés ! Si vous quittez, vos changements seront perdus.") ;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe());
  }





}
