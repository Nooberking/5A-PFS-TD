import { ReservationService } from './reservation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reservationPage',
  templateUrl: './reservationPage.component.html',
  styleUrls: ['./reservationPage.component.css']
})
export class ReservationPageComponent implements OnInit, OnDestroy {

  progress: number = 0;
  subscription?: Subscription;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.subscription = this.reservationService.currentReservationState.subscribe(
      reservationState=>{
        this.progress = 0;
        reservationState.forEach(state => {
          this.progress += +state * 25;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }





}
