/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReservationServiceService } from './reservationService.service';

describe('Service: ReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationServiceService]
    });
  });

  it('should ...', inject([ReservationServiceService], (service: ReservationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
