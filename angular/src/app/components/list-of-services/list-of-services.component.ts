import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { Route} from '@angular/router';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css']
})
export class ListOfServicesComponent implements OnInit {

  serviceTemp = new Services();
  listOfServices = null;
  listOfServicesArea = null;

  constructor(private service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  
  getListOfServices(){
    this.service.getListServices().subscribe(
      (response) => {
        console.log(response);
        this.listOfServices = response;
      },
      error => {
        console.log("Error In getListOfServices IN list of services component");
      }
    )
  }

  getArea(area : string | undefined){
    console.log("Checking For Area Value" , area);
    this.service.getAreaServices(area).subscribe(
      (response) => {
        console.log(response);
        this.listOfServicesArea = response;
      },
      error => {
        console.log("Error In getArea --> list-of-services-component.ts");
      }
    )
  }

}
