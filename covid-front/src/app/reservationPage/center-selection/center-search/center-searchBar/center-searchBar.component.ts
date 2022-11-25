import { CenterSearchEnum } from './../../CenterSearchEnum.enum';
import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

/**
 * Component for the search bar for the center.
 *
 * @export
 * @class CenterSearchBarComponent
 * @implements {OnChanges}
 */
@Component({
  selector: 'app-center-searchBar',
  templateUrl: './center-searchBar.component.html',
  styleUrls: ['./center-searchBar.component.css']
})
export class CenterSearchBarComponent implements OnChanges {

  /**
   * Option of center research.
   * @type {CenterSearchEnum}
   * @memberof CenterSearchBarComponent
   */
  @Input()
  searchOption?:  CenterSearchEnum;

  /**
   * @ignore
   * @memberof CenterSearchBarComponent
   */
  @Output()
  centersRequestEvent = new EventEmitter<string>();

  /**
   * Label of the search bar.
   *
   * @type {string}
   * @memberof CenterSearchBarComponent
   */
  label?: string;
  /**
   * example research on the search bar.
   *
   * @type {string}
   * @memberof CenterSearchBarComponent
   */
  example?: string;

  /**
   * Request prompted on the search bar.
   *
   * @type {string}
   * @memberof CenterSearchBarComponent
   */
  request: string = "";

  /**
   * When changes occurs, changes label and example according to search type.
   *
   * @param {SimpleChanges} changes
   * @memberof CenterSearchBarComponent
   */
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

  /**
   * Requests the list of all centers.
   *
   * @memberof CenterSearchBarComponent
   */
  requestAllCenters(): void {
    this.request = "";
    this.centersRequestEvent.emit("*allCenters*");
  }

  /**
   * Update the request according to the string prompted on the search bar.
   *
   * @memberof CenterSearchBarComponent
   */
  updateRequest(): void {
    if(this.request != "") this.centersRequestEvent.emit(this.request);
  }
}
