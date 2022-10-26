import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectHome(){this.router.navigate(['/']);}

}
