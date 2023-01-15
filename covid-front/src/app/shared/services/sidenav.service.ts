import { SidenavInfos } from './../dto/SidenavInfos';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  infos: SidenavInfos = {
    mode :'side',
    opened : true
  };

  @Output()
  changeInfos: EventEmitter<SidenavInfos> = new EventEmitter();

constructor(private observer: BreakpointObserver) { }


switchResponsiveSidenav(): void {
  this.observer.observe(['(max-width: 800px)'])
  .subscribe((res) => {
    if (res.matches) {
      this.infos.mode = 'over';
      this.infos.opened = false;

    }
    else {
      this.infos.mode = 'side';
      this.infos.opened = true;
    }
    this.changeInfos.emit(this.infos);
  });
}

toggle(): void {
  this.infos.opened = !this.infos.opened;
  this.changeInfos.emit(this.infos);
}
}
