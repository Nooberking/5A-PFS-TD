import { CenterSearchEnum } from './../CenterSearchEnum.enum';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cs-searchOption',
  templateUrl: './cs-searchOption.component.html',
  styleUrls: ['./cs-searchOption.component.css']
})
export class CsSearchOptionComponent implements OnInit {


  centerSearch = CenterSearchEnum;

  @Output()
  searchChoice = new EventEmitter<CenterSearchEnum>();

  constructor() { }

  ngOnInit() {
    
  }

  searchSelected(value:CenterSearchEnum): void{
    this.searchChoice.emit(value);
  }

}
