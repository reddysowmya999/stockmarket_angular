import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";

  constructor(private loginserviceService: LoginserviceService,
    private router: Router){
  }

  onKey(event: any) { 
    this.username = event.target.value;
    console.log(this.username);
  }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  login(){
 
  if(this.username==="admin"){
    this.loginserviceService.loggedin("admin");
    this.router.navigate(['/adminlanding']);
  }
  else{
    this.loginserviceService.loggedin("user");
    this.router.navigate(['/userlanding']);
  }
  }

}
