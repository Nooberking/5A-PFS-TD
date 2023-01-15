import { ReservationService } from './../reservation.service';
import { Patient } from './../../shared/dto/Patient';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/**
 * Component that contains the whole patient information' selection phase.
 *
 * @export
 * @class InformationSelectionComponent
 */
@Component({
  selector: 'app-information-selection',
  templateUrl: './information-selection.component.html',
  styleUrls: ['./information-selection.component.css']
})
export class InformationSelectionComponent {

  /**
   * @ignore
   *
   * @type {FormControl}
   * @memberof InformationSelectionComponent
   */
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  /**
   * @ignore
   *
   * @type {FormControl}
   * @memberof InformationSelectionComponent
   */
  firstnameFormControl: FormControl = new FormControl('',[Validators.required]);
  /**
   *@ignore
   *
   * @type {FormControl}
   * @memberof InformationSelectionComponent
   */
  nameFormControl: FormControl = new FormControl('',[Validators.required]);
  phoneNumberControl: FormControl = new FormControl('',[Validators.required, Validators.maxLength(20)])
  /**
   * Patient informations.
   *
   * @type {Patient}
   * @memberof InformationSelectionComponent
   */
  patient : Patient = {
    "firstName": "",
    "lastName": "",
    "mail": "",
    "phoneNumber": ""
  };
  /**
   * Boolean for if this phase was already completed.
   *
   * @type {boolean}
   * @memberof InformationSelectionComponent
   */
  alreadyPassed: boolean = false;

  /**
   * Creates an instance of InformationSelectionComponent.
   * @param {ReservationService} reservationService
   * @memberof InformationSelectionComponent
   */
  constructor(private reservationService: ReservationService) { }

  /**
   * Registers the patient informations on the reservation.
   *
   * @memberof InformationSelectionComponent
   */
  onConfirmInfos(){
    this.patient.firstName = this.firstnameFormControl.value
    this.patient.lastName = this.nameFormControl.value;
    this.patient.mail = this.emailFormControl.value;
    this.patient.phoneNumber = this.phoneNumberControl.value.replace(' ', '');
    this.reservationService.updateReservationPatient(this.patient);
    if(!this.alreadyPassed){
      this.reservationService.updateReservationState(2);
      this.alreadyPassed = true;
    }
  }

}
