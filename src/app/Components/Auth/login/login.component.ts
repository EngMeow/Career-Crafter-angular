import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string = '';
  myUser:any = '';
  constructor(private _AuthService:AuthService ,
    private _Router:Router,
    private toastr: ToastrService){}

  loginForm = new FormGroup({
    email :new FormControl(null ,[
      Validators.email, 
      Validators.required
    ]),
    password :new FormControl(null,[
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      Validators.required,
    ]),
  })

  submitLoginForm(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe((response) => {
      if(response.message == 'Login done successfully') {
        this.myUser = this._AuthService.currentUser
        this.myUser.next(response.user)
        console.log(this.myUser.getValue());
        this._Router.navigate(['/dashboard'])
      } else {
        this.error = response.message;
      }
    })
  }
}
