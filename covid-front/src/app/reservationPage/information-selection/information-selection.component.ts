import { ReservationService } from './../reservation.service';
import { Patient } from './../../shared/dto/Patient';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-information-selection',
  templateUrl: './information-selection.component.html',
  styleUrls: ['./information-selection.component.css']
})
export class InformationSelectionComponent implements OnInit {

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  firstnameFormControl: FormControl = new FormControl('',[Validators.required]);
  nameFormControl: FormControl = new FormControl('',[Validators.required]);
  patient : Patient = {
    "firstName": "",
    "lastName": "",
    "mail": ""
  };
  alreadyPassed: boolean = false;



  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  onConfirmInfos(){
    this.patient.firstName = this.firstnameFormControl.value
    this.patient.lastName = this.nameFormControl.value;
    this.patient.mail = this.emailFormControl.value;
    this.reservationService.updateReservationPatient(this.patient);
    if(!this.alreadyPassed){
      this.reservationService.updateReservationState(2);
      this.alreadyPassed = true; 
    }
  }

}
