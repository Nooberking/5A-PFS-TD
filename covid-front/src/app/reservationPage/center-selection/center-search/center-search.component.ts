import { Observable, Subscription } from 'rxjs';
import { VaccinationCenter } from './../../../shared/dto/VaccinationCenter';
import { ReservationService } from './../../reservation.service';

import { CenterSearchEnum } from './../CenterSearchEnum.enum';
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

/**
 *
 *
 * @export
 * @class CenterSearchComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-center-search',
  templateUrl: './center-search.component.html',
  styleUrls: ['./center-search.component.css']
})
export class CenterSearchComponent implements OnDestroy {
  /**
   * Available options of search Type : By city or by center name.
   *
   * @type {CenterSearchEnum}
   * @memberof CenterSearchComponent
   */
  @Input()
  searchOption?: CenterSearchEnum;

  /**
   * Event to transfer the selected search option.
   *
   * @type {EventEmitter<CenterSearchEnum>}
   * @memberof CenterSearchComponent
   */
  @Output()
  searchOptionEvent: EventEmitter<CenterSearchEnum> = new EventEmitter();

  /**
   * List of centers found.
   *
   * @type {VaccinationCenter[]}
   * @memberof CenterSearchComponent
   */
  centers?: VaccinationCenter[];
  /**
   * Boolean for loading icon if the data have been requested but didn't come yet.
   *
   * @type {boolean}
   * @memberof CenterSearchComponent
   */
  loading: boolean = false;

  /**
   * @ignore
   *
   * @type {Subscription}
   * @memberof CenterSearchComponent
   */
  sub?:Subscription;

  /**
   * Creates an instance of CenterSearchComponent.
   *
   * Injection dependance : Reservation service to get centers.
   * @param {ReservationService} reservationService
   * @memberof CenterSearchComponent
   */
  constructor(private reservationService: ReservationService) { }

  /**
   * Select the correct observable to get centers according to the type of request we want to
   * send in order to get a list of centers.
   *
   * @param {string} request
   * @return {*}  {Observable<VaccinationCenter[]>}
   * @memberof CenterSearchComponent
   */
  selectObservableForCenters(request: string): Observable<VaccinationCenter[]> {
    if(request == "*allCenters*") return this.reservationService.getAllCenters();
    else if(this.searchOption == CenterSearchEnum.CITY) return this.reservationService.getCentersByCity(request);
    else return this.reservationService.getCentersByName(request);

  }

  /**
   *
   * function to manage the center list request by controlling the loading boolean
   * according to the transmission state of data.
   * @param {string} request
   * @memberof CenterSearchComponent
   */
  getCenters(request: string): void {
    this.loading = true;
    let centersObservable = this.selectObservableForCenters(request);
    this.sub = centersObservable.subscribe(centers =>
      {
        this.loading = false;
        this.centers = centers;
      });

  }
  /**
   * Undo Search type selection in case of clicking back button.
   *
   * @memberof CenterSearchComponent
   */
  undoSearchSelect() {
    this.searchOptionEvent.emit(undefined);
  }

  /**
   *@ignore
   *
   * @memberof CenterSearchComponent
   */
  ngOnDestroy(): void {
    this.sub?.unsubscribe();

  }
}
