import { Subscription } from 'rxjs';
import { SidenavService } from './../../services/sidenav.service';
import { SidenavInfos } from './../../dto/SidenavInfos';
import { Router } from '@angular/router';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

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
export class HeaderComponent implements AfterViewInit, OnDestroy{

  sidenavInfos: SidenavInfos = {
    mode: "side",
    opened: true
  };

  sub?: Subscription;

  /**
   * Creates an instance of HeaderComponent.
   * @param {Router} router
   * @memberof HeaderComponent
   */
  constructor(
    private router: Router,
    private sidenavService: SidenavService) { }

  ngAfterViewInit(): void {
    this.sub = this.sidenavService.changeInfos.subscribe(infos => {
      this.sidenavInfos = infos;
    });
  }


  /**
   * Redirection for the home page.
   *
   * @memberof HeaderComponent
   */
  onHomeClick(){
    this.router.navigate(['./home']);
  }

  toggleSidenav(){
    this.sidenavService.toggle();
    this.sub = this.sidenavService.changeInfos.subscribe(infos => {
      this.sidenavInfos = infos;
    });
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
