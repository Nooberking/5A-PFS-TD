import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component for the button which allows to lauch inscription process for reservation.
 *
 * @export
 * @class HomePageStartButtonComponent
 */
@Component({
  selector: 'app-homePage-startButton',
  templateUrl: './homePage-startButton.component.html',
  styleUrls: ['./homePage-startButton.component.css']
})
export class HomePageStartButtonComponent {

  /**
   * Creates an instance of HomePageStartButtonComponent.
   *
   * @param {Router} router
   * @memberof HomePageStartButtonComponent
   */
  constructor(private router: Router){}

  /**
   * Redirection action when clicking on the button.
   *
   * @memberof HomePageStartButtonComponent
   */
  onClick() {
    this.router.navigate(['./reservation']);
  }

}
