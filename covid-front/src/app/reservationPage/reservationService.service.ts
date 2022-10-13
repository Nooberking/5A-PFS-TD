import { VaccinationCenter } from './../shared/dto/VaccinationCenter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

constructor(private httpClient: HttpClient) { }

getAllCenters() : Observable<VaccinationCenter[]> {
  return this.httpClient.get<VaccinationCenter[]>("public/centers");
}



}
