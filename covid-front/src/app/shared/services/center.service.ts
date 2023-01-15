import { HttpClient } from '@angular/common/http';
import { AdminCentersMode } from './../dto/AdminCentersMode';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { VaccinationCenter } from '../dto/VaccinationCenter';

@Injectable({
  providedIn: 'root'
})
export class CenterService implements OnDestroy {

  private EMPTYCENTER: VaccinationCenter = {
    name:"",
    city:""
  };



  private centerStream = new BehaviorSubject<VaccinationCenter>(this.EMPTYCENTER);
  private modeStream = new  BehaviorSubject<AdminCentersMode>({name: 'search'});

  currentCenter = this.centerStream.asObservable();
  currentMode = this.modeStream.asObservable();

  subs: Subscription[] = [];

  constructor(private httpClient: HttpClient) { }

  modifyCenter(center: VaccinationCenter){
    this.centerStream.next(center);
  }

  changeMode(mode: AdminCentersMode){
    this.modeStream.next(mode);
  }

  resetSelectedCenter(){
    this.centerStream.next(this.EMPTYCENTER);
  }

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

  addSelectedCenter(center: VaccinationCenter): Observable<object>{
      return this.httpClient.post('api/admin/center', center);
  }

  updateSelectedCenter(center: VaccinationCenter): Observable<object>{
    return this.httpClient.put('api/admin/center', center);
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

}
