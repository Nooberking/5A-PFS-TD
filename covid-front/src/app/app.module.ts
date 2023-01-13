import { AdministrationPageModule } from './administrationPage/administrationPage.module';
import { ReservationPageModule } from './reservationPage/reservationPage.module';
import { HomePageStartButtonComponent } from './homePage/homePage-startButton/homePage-startButton.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './homePage/homePage.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LoginPageComponent } from './loginPage/loginPage.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageStartButtonComponent,
    LoginPageComponent
   ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReservationPageModule,
    AdministrationPageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
