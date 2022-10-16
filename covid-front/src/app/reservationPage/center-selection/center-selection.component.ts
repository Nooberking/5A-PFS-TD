import { VaccinationCenter } from './../../shared/dto/VaccinationCenter';
import { ReservationService } from './../reservation.service';
import { Component, OnInit } from '@angular/core';
import { CenterSearchEnum } from './CenterSearchEnum.enum';

@Component({
  selector: 'app-center-selection',
  templateUrl: './center-selection.component.html',
  styleUrls: ['./center-selection.component.css']
})
export class CenterSelectionComponent implements OnInit{

  selectedOption?: CenterSearchEnum ;
  centers: VaccinationCenter[] = [];

  constructor(private reservationService: ReservationService) { }
  ngOnInit(): void {
  }





  changeSelectedOption(option: CenterSearchEnum){
    this.selectedOption = option;
  }


}
