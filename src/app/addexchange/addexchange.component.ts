import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginserviceService} from '../loginservice.service';
@Component({
  selector: 'app-addexchange',
  templateUrl: './addexchange.component.html',
  styleUrls: ['./addexchange.component.css']
})
export class AddexchangeComponent implements OnInit {
  islogged:string;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router){
  }

  getLoginDetails(): string {
    this.islogged= this.loginserviceService.currentUserValue();
    return this.islogged;
  }

  ngOnInit() {
    this.islogged=this.getLoginDetails();
    if(this.islogged!="admin" ){
      this.loginserviceService.resetvalue();
      this.router.navigate(['/login']);
      return;
    }
  }

}
