import { CenterDetailsDialogComponent } from './administration-centers-page/center-details/center-details-dialog/center-details-dialog.component';
import { CenterDetailsComponent } from './administration-centers-page/center-details/center-details.component';
import { CentersAddComponent } from './administration-centers-page/centers-search/centers-add/centers-add.component';
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
    CenterDetailsComponent,
    CenterDetailsDialogComponent,
    CenterItemComponent
  ]
})
export class AdministrationPageModule { }
