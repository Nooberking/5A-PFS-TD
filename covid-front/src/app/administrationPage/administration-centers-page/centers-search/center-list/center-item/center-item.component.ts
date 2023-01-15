import { CenterService } from './../../../../../shared/services/center.service';
import { ReservationService } from './../../../../../reservationPage/reservation.service';
import { VaccinationCenter } from './../../../../../shared/dto/VaccinationCenter';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.component.html',
  styleUrls: ['./center-item.component.css']
})
export class CenterItemComponent {

  @Input()
  center!: VaccinationCenter;

  buttonConfirm: boolean = false;



  constructor(
    private reservationService: ReservationService,
    private centerService: CenterService) { }

  confirmButton(): void{
    this.buttonConfirm = !this.buttonConfirm;
  }

  selectCenter(): void{
    this.centerService.modifyCenter(this.center);
    this.centerService.changeMode({
      name:'center-details'
    });
  }



}
