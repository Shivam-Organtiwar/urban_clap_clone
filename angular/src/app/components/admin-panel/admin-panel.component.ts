import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  serviceProvider = new Services();
  constructor(private service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  updateServices(){
    console.log("getting called admin panel component")
    this.service.updateService(this.serviceProvider).subscribe(
    data => { 
      console.log("Data Received");
      this._router.navigate(['/adminSuccess'])
  },
    error => console.log("Error In Admin Panel Component") 
 )}

}
