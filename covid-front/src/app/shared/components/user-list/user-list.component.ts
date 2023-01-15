import { VaccinationCenter } from './../../dto/VaccinationCenter';
import { UserDetails } from './../../dto/UserDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserDetails[] = [];
  role: string = '';
  loading?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
