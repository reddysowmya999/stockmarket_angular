import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginserviceService: LoginserviceService,
    private router: Router){
  }

  ngOnInit(): void {
  }

  onsuccess(){
    this.loginserviceService.loggedin("user");
    this.router.navigate(['/userlanding']);
  }

}
