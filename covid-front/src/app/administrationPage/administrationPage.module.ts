import { CentersAddComponent } from './administration-centers-page/centers-add/centers-add.component';
import { ReservationPageModule } from './../reservationPage/reservationPage.module';
import { CenterItemComponent } from './administration-centers-page/centers-search/center-list/center-item/center-item.component';
import { CenterListComponent } from './administration-centers-page/centers-search/center-list/center-list.component';
import { CenterSearchBarComponent } from './administration-centers-page/centers-search/center-searchBar/center-searchBar.component';
import { CentersSearchComponent } from './administration-centers-page/centers-search/centers-search.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './administrationPage.component';
import { AdministrationHomepageComponent } from './administration-homepage/administration-homepage.component';
import { AdministrationCentersPageComponent } from './administration-centers-page/administration-centers-page.component';
import { AdministrationMyCenterPageComponent } from './administration-my-center-page/administration-my-center-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule
  ],
  declarations: [
    AdministrationPageComponent,
    AdministrationHomepageComponent,
    AdministrationCentersPageComponent,
    AdministrationMyCenterPageComponent,
    CentersSearchComponent,
    CenterSearchBarComponent,
    CenterListComponent,
    CentersAddComponent,
    CenterItemComponent
  ]
})
export class AdministrationPageModule { }
