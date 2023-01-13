import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './administrationPage.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule
  ],
  declarations: [AdministrationPageComponent]
})
export class AdministrationPageModule { }
