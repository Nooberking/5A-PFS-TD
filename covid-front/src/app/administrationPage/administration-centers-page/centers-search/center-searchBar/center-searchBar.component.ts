import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-center-searchBar',
  templateUrl: './center-searchBar.component.html',
  styleUrls: ['./center-searchBar.component.css']
})
export class CenterSearchBarComponent  {

  /**
   * @ignore
   * @memberof CenterSearchBarComponent
   */
  @Output()
  centersRequestEvent = new EventEmitter<string>();



  /**
   * Request prompted on the search bar.
   *
   * @type {string}
   * @memberof CenterSearchBarComponent
   */
  request: string = "";


  

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
