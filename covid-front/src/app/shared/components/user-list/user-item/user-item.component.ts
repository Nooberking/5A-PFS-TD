import { UserDetails } from './../../../dto/UserDetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  userDetails?: UserDetails;
  buttonConfirm: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  confirmButton(): void{
    this.buttonConfirm = !this.buttonConfirm;
  }

}
