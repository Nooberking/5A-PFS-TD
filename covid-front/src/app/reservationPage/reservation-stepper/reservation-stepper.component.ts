import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.css']
})
export class ReservationStepperComponent implements OnInit {
  duration: number = 10000; 

  constructor() { }

  ngOnInit() {
  }

}
