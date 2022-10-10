import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homePage-startButton',
  templateUrl: './homePage-startButton.component.html',
  styleUrls: ['./homePage-startButton.component.css']
})
export class HomePageStartButtonComponent {

  constructor(private router: Router){}

  onClick() {
    this.router.navigate(['./reservation']);
  }

}
