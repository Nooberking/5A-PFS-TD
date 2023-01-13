import { Subscription } from 'rxjs';
import { SidenavService } from './../shared/services/sidenav.service';

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SidenavInfos } from '../shared/dto/SidenavInfos';


@Component({
  selector: 'app-administrationPage',
  templateUrl: './administrationPage.component.html',
  styleUrls: ['./administrationPage.component.css']
})
export class AdministrationPageComponent implements AfterViewInit, OnDestroy {

  sidenavInfos: SidenavInfos = {
    mode: 'side',
    opened: true
  }

  sub ?: Subscription;



  constructor(private sidenavService: SidenavService) { }


  ngAfterViewInit(): void {
    this.sidenavService.switchResponsiveSidenav();
    this.sub = this.sidenavService.changeInfos.subscribe(infos => {
      this.sidenavInfos = infos;
    });

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


}
