import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = new User();
  constructor(private service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log("getting called log in component")
    this.service.logInService(this.user).subscribe(
    data => { 
      console.log("Data Received");
      this._router.navigate(['/adminPanel'])
  },
    error => console.log("Error In Log In Component") 
 )}   


  registration(){
    this._router.navigate(['/signup'])
  }
}
