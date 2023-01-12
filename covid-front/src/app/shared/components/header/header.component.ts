import { Router } from '@angular/router';
import { Component } from '@angular/core';

/**
 * Component for the header template.
 *
 * @export
 * @class HeaderComponent
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /**
   * Creates an instance of HeaderComponent.
   * @param {Router} router
   * @memberof HeaderComponent
   */
  constructor(private router: Router) { }


  /**
   * Redirection for the home page.
   *
   * @memberof HeaderComponent
   */
  onClick(){
    this.router.navigate(['./home']);
  }


}
