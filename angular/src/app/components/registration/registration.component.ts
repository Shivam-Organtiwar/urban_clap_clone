import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  constructor(private service : RegistrationService, private _router : Router) { }


  ngOnInit(): void {
  }

  registerUser(){
    this.service.signUpService(this.user).subscribe(
      data => {
        console.log("register component working");
      },
      error => {
        console.log("Error In Register Component");
      }
    )
  }
}
