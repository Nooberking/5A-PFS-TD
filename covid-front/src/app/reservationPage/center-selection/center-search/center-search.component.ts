import { CenterSearchEnum } from './../CenterSearchEnum.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-search',
  templateUrl: './center-search.component.html',
  styleUrls: ['./center-search.component.css']
})
export class CenterSearchComponent  {
  @Input()
  searchOption?: CenterSearchEnum;



  constructor() { }

}
