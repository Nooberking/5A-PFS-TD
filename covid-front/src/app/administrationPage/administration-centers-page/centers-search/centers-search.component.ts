import { CenterService } from './../../../shared/services/center.service';
import { Subscription, Observable } from 'rxjs';
import { VaccinationCenter } from './../../../shared/dto/VaccinationCenter';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-centers-search',
  templateUrl: './centers-search.component.html',
  styleUrls: ['./centers-search.component.css']
})
export class CentersSearchComponent implements OnDestroy {


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
   * Injection dependance : center service to get centers.
   * @param {CenterService} centerService
   * @memberof CenterSearchComponent
   */
  constructor(private centerService: CenterService) { }

  /**
   * Select the correct observable to get centers according to the type of request we want to
   * send in order to get a list of centers.
   *
   * @param {string} request
   * @return {*}  {Observable<VaccinationCenter[]>}
   * @memberof CenterSearchComponent
   */
  selectObservableForCenters(request: string): Observable<VaccinationCenter[]> {
    if(request == "*allCenters*") return this.centerService.getAllCenters();
    else return this.centerService.getCentersByName(request);

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

  ngOnDestroy() {
  this.sub?.unsubscribe();
  }
}
