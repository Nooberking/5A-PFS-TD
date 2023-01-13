import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './administrationPage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AdministrationPageComponent]
})
export class AdministrationPageModule { }
