import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userForm !: FormGroup;

  confirmButton: string = 'Mettre à jour';

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fromBuilder.group({
      username: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      center: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  get form() {return this.userForm.controls;}



}
