import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent {

  constructor(private router: Router) { }


  redirectHome(){this.router.navigate(['/']);}

}
