import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  loginFormControl: FormControl = new FormControl('', [Validators.required]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
