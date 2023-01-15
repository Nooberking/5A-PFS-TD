import { CenterService } from './../../services/center.service';
import { EmployeeService } from './../../services/employee.service';
import { VaccinationCenter } from './../../dto/VaccinationCenter';
import { UserDetails } from './../../dto/UserDetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserDetails[] = [];

  @Input()
  role: string = '';

  @Input()
  center?: VaccinationCenter;

  loading?: boolean;

  constructor(
    private employeeService: EmployeeService,
    private centerService: CenterService
    ) { }

  ngOnInit() {
    this.employeeService.getUsersByCenterAndRole(this.role, this.center).subscribe(
      employees => {employees.forEach( employee => this.users.push(employee))});
  }

  onUserDetails(){
    this.centerService.changeMode({name: 'user-details'});
  }

}
