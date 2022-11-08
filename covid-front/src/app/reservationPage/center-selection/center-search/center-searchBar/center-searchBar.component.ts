import { CenterSearchEnum } from './../../CenterSearchEnum.enum';
import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-center-searchBar',
  templateUrl: './center-searchBar.component.html',
  styleUrls: ['./center-searchBar.component.css']
})
export class CenterSearchBarComponent implements OnChanges {

  @Input()
  searchOption?:  CenterSearchEnum;

  @Output()
  centersRequestEvent = new EventEmitter<string>();

  label?: string;
  example?: string;

  request: string = "";

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

  requestAllCenters(): void {
    this.request = "";
    this.centersRequestEvent.emit("*allCenters*");
  }

  updateRequest(): void {
    if(this.request != "") this.centersRequestEvent.emit(this.request);
  }
}
