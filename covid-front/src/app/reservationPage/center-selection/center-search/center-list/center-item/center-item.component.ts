import { ReservationService } from './../../../../reservation.service';
import { VaccinationCenter } from './../../../../../shared/dto/VaccinationCenter';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.component.html',
  styleUrls: ['./center-item.component.css']
})
export class CenterItemComponent implements OnInit {
  @Input()
  center!: VaccinationCenter;

  buttonConfirm: boolean = false;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  confirmButton(): void{
    this.buttonConfirm = !this.buttonConfirm;
  }

  selectCenter():void{
    this.reservationService.updateReservationCenter(this.center); 
  }
}
