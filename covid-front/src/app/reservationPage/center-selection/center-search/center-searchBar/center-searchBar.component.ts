import { CenterSearchEnum } from './../../CenterSearchEnum.enum';
import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-center-searchBar',
  templateUrl: './center-searchBar.component.html',
  styleUrls: ['./center-searchBar.component.css']
})
export class CenterSearchBarComponent implements OnChanges {

  @Input()
  searchOption?:  CenterSearchEnum;

  label?: string;
  example?: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.searchOption == CenterSearchEnum.CITY)
    {
      this.label = "Saisir le nom de la ville";
      this.example = "Ex: Nancy";
    }
    else
    {
      this.label = "Saisir le nom du centre";
      this.example = "Ex: UHSI Nancy";
    }
  }



}
