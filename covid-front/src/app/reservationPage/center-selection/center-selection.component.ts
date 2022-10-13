import { Component } from '@angular/core';
import { CenterSearchEnum } from './CenterSearchEnum.enum';

@Component({
  selector: 'app-center-selection',
  templateUrl: './center-selection.component.html',
  styleUrls: ['./center-selection.component.css']
})
export class CenterSelectionComponent {

  selectedOption?: CenterSearchEnum ;

  constructor() { }


  changeSelectedOption(option: CenterSearchEnum){
    this.selectedOption = option;
  }
}
