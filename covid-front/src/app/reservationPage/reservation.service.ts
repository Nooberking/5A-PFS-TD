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

  private reservationStateStream = new BehaviorSubject<boolean[]>([false, false, false, false]);
  currentReservationState = this.reservationStateStream. asObservable();


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
    return this.httpClient.post<Patient>("api/public/patient",patient);
  }

  updateReservationCenter(center: VaccinationCenter){
    let reservation: Reservation = {};
    this.currentReservation.subscribe(resa => {
      reservation = resa;
      reservation.center = center;
    });
    this.reservationStream.next(reservation);
  }

  updateReservationDate(date: Date){
    let reservation: Reservation = {};
    this.currentReservation.subscribe(resa =>{
      reservation = resa;
      reservation.date = date;
    });
    this.reservationStream.next(reservation);
  }

  updateReservationPatient(patient: Patient){
    let reservation: Reservation= {};
    this.currentReservation.subscribe(resa =>{
      reservation = resa;
      reservation.patient = patient;
    });
    this.reservationStream.next(reservation);
  }

  updateReservationState(state: number){
    if (state>= 0 && state < 4){
      let reservationState:boolean[] = [];
      this.currentReservationState.subscribe( resaState=> {
        reservationState = resaState;
        reservationState[state] = true;
    });
    this.reservationStateStream.next(reservationState);
    }
  }

  saveReservation(reservation: Reservation){
    if(reservation.patient) this.addPatient(reservation.patient).subscribe(patient =>{
      reservation.patient = patient;
      this.httpClient.post<Reservation>("api/public/reservation",reservation).subscribe(result =>{
        this.updateReservationState(3);
        
      });
        });
  }

}