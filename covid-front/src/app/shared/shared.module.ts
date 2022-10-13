import { PercentagePipe } from './pipes/percentage.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports:[
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,

    HeaderComponent,
    FooterComponent,

    PercentagePipe
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,

    PercentagePipe
  ]
})
export class SharedModule { }
