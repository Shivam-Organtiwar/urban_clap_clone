import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { Services } from '../services';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient : HttpClient) {}

  logInService(user : User) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/login", user);
  }

  signUpService(user : User) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/register", user);
  }
  
  updateService(serviceProvider : Services) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/serviceProvidersList",serviceProvider);
  }

  getListServices() : Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/listOfServiceProviders")
  }

  getAreaServices(area : string | undefined) : Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/areaList")
  }
}
