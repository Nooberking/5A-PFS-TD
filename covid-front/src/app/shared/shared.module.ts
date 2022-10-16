import { PercentagePipe } from './pipes/percentage.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,

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
