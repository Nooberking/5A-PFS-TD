import { ReservationProgressBarComponent } from './reservation-progressBar/reservation-progressBar.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationPageComponent } from './reservationPage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ReservationPageComponent,
    ReservationProgressBarComponent
  ]
})
export class ReservationPageModule { }
