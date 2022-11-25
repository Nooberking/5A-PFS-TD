import { Patient } from './../shared/dto/Patient';
import { Reservation } from './../shared/dto/Reservation';
import { VaccinationCenter } from './../shared/dto/VaccinationCenter';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service for all methods concerning the reservations.
 *
 * @export
 * @class ReservationService
 */
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  /**
   * Stream to push reservation informations.
   *
   * @private
   * @memberof ReservationService
   */
  private reservationStream = new BehaviorSubject<Reservation>({});
  /**
   * Observable to catch reservation informations
   *
   * @memberof ReservationService
   */
  currentReservation = this.reservationStream.asObservable();

  /**
   *
   * Stream to push the reservation state.
   * @private
   * @memberof ReservationService
   */
  private reservationStateStream = new BehaviorSubject<boolean[]>([false, false, false, false]);
  /**
   * Observable to catch the reservation state information.
   *
   * @memberof ReservationService
   */
  currentReservationState = this.reservationStateStream. asObservable();

  /**
   *
   * @ignore
   * @type {Subscription[]}
   * @memberof ReservationService
   */
  subs : Subscription[] = [];

  /**
   * Creates an instance of ReservationService.
   * @param {HttpClient} httpClient
   * @memberof ReservationService
   */
  constructor(private httpClient: HttpClient,) { }

  /**
   *
   * Requests the API to get all centers.
   * @return {*}  {Observable<VaccinationCenter[]>}
   * @memberof ReservationService
   */
  getAllCenters() : Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
  }

  /**
   *
   * Requests the API to genter a list centers according to city's query.
   * @param {string} city
   * @return {*}  {Observable<VaccinationCenter[]>}
   * @memberof ReservationService
   */
  getCentersByCity(city: string): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers",{
      params: {
        "city": city
      }
    });
  }

  /**
   *
   * Requests the API to get a list of centers according to center name's query.
   * @param {string} name
   * @return {*}  {Observable<VaccinationCenter[]>}
   * @memberof ReservationService
   */
  getCentersByName(name: string): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers",{
      params:{
        "name": name
      }
    })
  }

  /**
   *
   * Posts to the API to add a new patient and returns the patient info if success.
   * @param {Patient} patient
   * @return {*}  {Observable<Patient>}
   * @memberof ReservationService
   */
  addPatient(patient: Patient): Observable<Patient>{
    return this.httpClient.post<Patient>("api/public/patient",patient);
  }

  /**
   *
   * Updates the reservation's infos by updating the center.
   * @param {VaccinationCenter} center
   * @memberof ReservationService
   */
  updateReservationCenter(center: VaccinationCenter){
    let reservation: Reservation = {};
    this.subs.push(this.currentReservation.subscribe(resa => {
      reservation = resa;
      reservation.center = center;
    }));
    this.reservationStream.next(reservation);
  }

  /**
   *
   * Updates the reservation's infos by updating the date.
   * @param {Date} date
   * @memberof ReservationService
   */
  updateReservationDate(date: Date){
    let reservation: Reservation = {};
    this.subs.push(this.currentReservation.subscribe(resa =>{
      reservation = resa;
      reservation.date = date;
    }));
    this.reservationStream.next(reservation);
  }

  /**
   *
   * Updates the reservation's infos by updating the patient.
   * @param {Patient} patient
   * @memberof ReservationService
   */
  updateReservationPatient(patient: Patient){
    let reservation: Reservation= {};
    this.subs.push(this.currentReservation.subscribe(resa =>{
      reservation = resa;
      reservation.patient = patient;
    }));
    this.reservationStream.next(reservation);
  }

  /**
   *
   * Updates the reservation's state.
   * @param {number} state
   * @memberof ReservationService
   */
  updateReservationState(state: number){
    if (state>= 0 && state < 4){
      let reservationState:boolean[] = [];
      this.subs.push(this.currentReservationState.subscribe( resaState=> {
        reservationState = resaState;
        reservationState[state] = true;
    }));
    this.reservationStateStream.next(reservationState);
    }
  }

  /**
   * Reset the whole reservation, including the reservation's status.
   *
   * @memberof ReservationService
   */
  resetReservation(){
    this.subs.forEach(sub => {sub.unsubscribe()});
    this.reservationStream.next({});
    this.reservationStateStream.next([false, false, false, false]);
  }

  /**
   *
   * Calls the API to register the reservation.
   * @param {Reservation} reservation
   * @memberof ReservationService
   */
  saveReservation(reservation: Reservation){
    if(reservation.patient) this.addPatient(reservation.patient).subscribe(patient =>{
      reservation.patient = patient;
      this.httpClient.post<Reservation>("api/public/reservation",reservation).subscribe(result =>{
        this.updateReservationState(3);
      });
        });
  }

}
