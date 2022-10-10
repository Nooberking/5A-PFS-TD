import { HomePageStartButtonComponent } from './homePage/homePage-startButton/homePage-startButton.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './homePage/homePage.component';
import { ReservationPageComponent } from './reservationPage/reservationPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageStartButtonComponent,
    ReservationPageComponent
   ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
