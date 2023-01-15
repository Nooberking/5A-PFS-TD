import { VaccinationCenter } from './../../../shared/dto/VaccinationCenter';
import { CenterService } from './../../../shared/services/center.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-users-list',
  templateUrl: './center-users-list.component.html',
  styleUrls: ['./center-users-list.component.css']
})
export class CenterUsersListComponent implements OnInit {


  selectedCenter ?: VaccinationCenter; 
  constructor(private centerService: CenterService) { }

  ngOnInit() {
    this.centerService.currentCenter.subscribe(center => {
      this.selectedCenter = center;
    })
  }

}
