import { Observable, Subscription } from 'rxjs';
import { VaccinationCenter } from './../../../shared/dto/VaccinationCenter';
import { ReservationService } from './../../reservation.service';

import { CenterSearchEnum } from './../CenterSearchEnum.enum';
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-center-search',
  templateUrl: './center-search.component.html',
  styleUrls: ['./center-search.component.css']
})
export class CenterSearchComponent implements OnDestroy {
  @Input()
  searchOption?: CenterSearchEnum;

  @Output()
  searchOptionEvent: EventEmitter<CenterSearchEnum> = new EventEmitter();

  centers?: VaccinationCenter[];
  loading: boolean = false;

  sub?:Subscription;

  constructor(private reservationService: ReservationService) { }

  selectObservableForCenters(request: string): Observable<VaccinationCenter[]> {
    if(request == "*allCenters*") return this.reservationService.getAllCenters();
    else if(this.searchOption == CenterSearchEnum.CITY) return this.reservationService.getCentersByCity(request);
    else return this.reservationService.getCentersByName(request);

  }

  getCenters(request: string): void {
    this.loading = true;
    let centersObservable = this.selectObservableForCenters(request);
    this.sub = centersObservable.subscribe(centers =>
      {
        this.loading = false;
        this.centers = centers;
      });

  }
  undoSearchSelect() {
    this.searchOptionEvent.emit(undefined);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();

  }
}
