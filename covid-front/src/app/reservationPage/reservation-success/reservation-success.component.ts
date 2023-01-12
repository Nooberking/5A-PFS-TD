import { Router } from '@angular/router';
import { Component } from '@angular/core';

/**
 * Component for the success page that appears if the reservation succed?
 *
 * @export
 * @class ReservationSuccessComponent
 */
@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent {

  /**
   * Creates an instance of ReservationSuccessComponent.
   * @param {Router} router
   * @memberof ReservationSuccessComponent
   */
  constructor(private router: Router) { }


  /**
   * Redirection for the home page.
   *
   * @memberof ReservationSuccessComponent
   */
  redirectHome(){this.router.navigate(['/']);}

}
