import { ReservationPageComponent } from './reservationPage/reservationPage.component';
import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home', component: HomePageComponent },
  { path:'reservation', component: ReservationPageComponent },
  { path:'', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
