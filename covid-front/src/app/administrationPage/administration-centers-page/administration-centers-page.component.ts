import { AdminCentersMode } from './../../shared/dto/AdminCentersMode';
import { CenterService } from './../../shared/services/center.service';
import { VaccinationCenter } from './../../shared/dto/VaccinationCenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-centers-page',
  templateUrl: './administration-centers-page.component.html',
  styleUrls: ['./administration-centers-page.component.css']
})
export class AdministrationCentersPageComponent implements OnInit {

  centers: VaccinationCenter[] = [];

  mode: AdminCentersMode = {name: 'search'};

  constructor(private centerService: CenterService){}
  ngOnInit(){
    this.centerService.currentMode.subscribe(mode => {
      this.mode = mode;
    })

  }

}
