import { CenterSearchEnum } from './../CenterSearchEnum.enum';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Component that contains selection buttons for center search type.
 *
 * @export
 * @class CsSearchOptionComponent
 */
@Component({
  selector: 'app-cs-searchOption',
  templateUrl: './cs-searchOption.component.html',
  styleUrls: ['./cs-searchOption.component.css']
})
export class CsSearchOptionComponent {


  /**
   *@ignore
   *
   * @memberof CsSearchOptionComponent
   */
  centerSearch = CenterSearchEnum;

  /**
   * Event to transmit the search type we want to proceed.
   * @memberof CsSearchOptionComponent
   */
  @Output()
  searchChoice = new EventEmitter<CenterSearchEnum>();

  /**
   * Emits the type of search selected.
   *
   * @param {CenterSearchEnum} value
   * @memberof CsSearchOptionComponent
   */
  searchSelected(value:CenterSearchEnum): void{
    this.searchChoice.emit(value);
  }

}
