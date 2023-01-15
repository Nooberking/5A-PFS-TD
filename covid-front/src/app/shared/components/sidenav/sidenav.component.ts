import { UserDetails } from './../../dto/UserDetails';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  userDetails!: UserDetails | null ;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userDetails = this.authService.userValue;
  }
  logout(){
    this.authService.logout();
  }

}
