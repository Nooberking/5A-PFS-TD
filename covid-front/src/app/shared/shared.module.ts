import { PercentagePipe } from './pipes/percentage.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
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
