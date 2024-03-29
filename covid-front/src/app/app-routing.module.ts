import { AuthGuard } from './shared/guards/auth.guard';
import { AdministrationPageComponent } from './administrationPage/administrationPage.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { CanDesactivateGuard } from './shared/guards/CanDesactivate.guard';
import { ReservationPageComponent } from './reservationPage/reservationPage.component';
import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home', component: HomePageComponent },
  { path:'reservation', component: ReservationPageComponent, canDeactivate:[CanDesactivateGuard]},
  { path:'login', component: LoginPageComponent},
  {
    path:'admin',
    component: AdministrationPageComponent,
    canActivate: [AuthGuard]
  },

  { path:'', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
