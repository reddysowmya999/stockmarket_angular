import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  islogged:string ;
  constructor() { 
    console.log("here in service");
    if(localStorage){
      this.islogged= localStorage.getItem('islogged');
      if(this.islogged===null){
        localStorage.setItem('islogged',"no");
      }
    }
    else{
      console.log("not supported");
    }
  }
   currentUserValue(): string {
    return localStorage.getItem('islogged');;
}

 loggedin(type:string){
  localStorage.setItem('islogged',type);
  console.log(type);
}

resetvalue(){
  localStorage.setItem('islogged',"no");
}

loggedout(){
  localStorage.setItem('islogged',"no");
  console.log("set n from service");
}

}
