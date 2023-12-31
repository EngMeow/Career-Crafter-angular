import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient){}

  register(formData:any):Observable<any>
  {
    return  this._HttpClient.post('http://localhost:7500/api/v1/auth/signup',formData)
  }

  login(formData:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:7500/api/v1/auth/login',formData)
  }

}
