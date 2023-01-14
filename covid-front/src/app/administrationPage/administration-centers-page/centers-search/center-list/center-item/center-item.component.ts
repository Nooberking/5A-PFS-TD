import { ReservationService } from './../../../../../reservationPage/reservation.service';
import { VaccinationCenter } from './../../../../../shared/dto/VaccinationCenter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.component.html',
  styleUrls: ['./center-item.component.css']
})
export class CenterItemComponent {

  @Input()
  center!: VaccinationCenter;

  buttonConfirm: boolean = false;



  constructor(private reservationService: ReservationService) { }

  confirmButton(): void{
    this.buttonConfirm = !this.buttonConfirm;
  }

  selectCenter(): void{
    console.log("center selected");
    console.log('name : ' + this.center.name);
  }

  deleteCenter(): void{
    console.log("center deleted");
    console.log('name : ' + this.center.name);
  }

}
