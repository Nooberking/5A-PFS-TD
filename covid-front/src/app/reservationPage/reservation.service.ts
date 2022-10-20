import { Patient } from './../shared/dto/Patient';
import { Reservation } from './../shared/dto/Reservation';
import { VaccinationCenter } from './../shared/dto/VaccinationCenter';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationStream = new BehaviorSubject<Reservation>({});
  currentReservation = this.reservationStream.asObservable();


  constructor(private httpClient: HttpClient,) { }

  getAllCenters() : Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
  }

  getCentersByCity(city: string): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers",{
      params: {
        "city": city
      }
    });
  }

  getCentersByName(name: string): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers",{
      params:{
        "name": name
      }
    })
  }

  addPatient(patient: Patient): Observable<Patient>{
    return this.httpClient.post<Patient>("api/public/patient",{
      params:{
        "firstName": patient.firstName,
        "lastName": patient.lastName,
        "mail": patient.mail
      }
    });
  }

  updateReservationCenter(center: VaccinationCenter){
    let reservation: Reservation = {};
    this.currentReservation.subscribe(resa => {
      reservation = resa;
      reservation.center = center;
    }).unsubscribe();
    this.reservationStream.next(reservation);
  }

  updateReservationDate(date: Date){
    let reservation: Reservation = {};
    this.currentReservation.subscribe(resa =>{
      reservation = resa;
      reservation.date = date;
    }).unsubscribe();
    this.reservationStream.next(reservation);
  }

  updateReservationPatient(patient: Patient){
    let reservation: Reservation= {};
    this.addPatient(patient).subscribe(registeredPatient => {
      this.currentReservation.subscribe(resa => {
        reservation = resa;
        reservation.patient = registeredPatient;
      }).unsubscribe();
    }).unsubscribe();
    this.reservationStream.next(reservation);
  }
  
}
