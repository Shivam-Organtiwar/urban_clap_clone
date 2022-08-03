import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  serviceProvider(){
    this._router.navigate(['/login'])
  }

  user(){
    this._router.navigate(['/customers'])
  }
}
