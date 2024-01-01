import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private _HttpClient:HttpClient,
    private _Router:Router){}

  currentUser:any = new BehaviorSubject(null) ;

  // saveCurrentUser(){
  //   let token:any = localStorage.getItem('jwt');
  //   this.currentUser = jwtDecode(token)
  //   console.log(this.currentUser);
  // }
  register(formData:any):Observable<any>
  {
    return  this._HttpClient.post('http://localhost:7500/api/v1/auth/signup',formData)
  }

  login(formData:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:7500/api/v1/auth/login',formData)
  }

  logout(){
    this.currentUser.next(null);
    this._Router.navigate(['/login'])
  }

}
