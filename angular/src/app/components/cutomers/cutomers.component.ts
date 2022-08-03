import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-cutomers',
  templateUrl: './cutomers.component.html',
  styleUrls: ['./cutomers.component.css']
})
export class CutomersComponent implements OnInit {

  user = new User();
  constructor(private service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  customerLogIn(){
    console.log("getting called log in customer component")
    this.service.logInService(this.user).subscribe(
    data => { 
      console.log("Data Received");
      this._router.navigate(['/seeListOfServices'])
  },
    error => console.log("Error In Log In Component") 
 )
  }

  userRegistration(){
    this._router.navigate(['/signup'])
  }
}
