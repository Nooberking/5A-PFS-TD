import { VaccinationCenter } from './../../../../shared/dto/VaccinationCenter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {

  @Input()
  centers?: VaccinationCenter[];
  @Input()
  loading?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
