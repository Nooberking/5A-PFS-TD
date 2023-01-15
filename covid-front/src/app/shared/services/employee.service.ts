import { UserDetails } from './../dto/UserDetails';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { VaccinationCenter } from './../dto/VaccinationCenter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor(private htppClient: HttpClient) { }

getAdminsByCenter(center?: VaccinationCenter){
  return this.htppClient.post<UserDetails[]>(`${environment.apiAdminUrl}/administrators`, center);
}

getDoctorsByCenter(center?: VaccinationCenter){
  return this.htppClient.post<UserDetails[]>(`${environment.apiAdminUrl}/doctors`, center);
}

getUsersByCenterAndRole(role: string, center?: VaccinationCenter){
  if(role === 'DOCTOR' ) return this.getDoctorsByCenter(center);
  else return this.getAdminsByCenter(center);

}

}
