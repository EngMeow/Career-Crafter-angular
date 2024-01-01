import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService,  } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ,
    private _Router:Router,
    private toastr: ToastrService){}

  error:string = '';

  registerForm = new FormGroup({
    name :new FormControl(null, [
      Validators.required,
      Validators.minLength(5)
    ]),
    nationalID :new FormControl(null ,[
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14)
    ]),
    gender :new FormControl('0' ,[
      Validators.required
    ]),
    phone :new FormControl(null, [
      Validators.required,
      Validators.pattern('^(010|011|015|012)[0-9]{8}$'),
    ]),
    role :new FormControl('0',[
      Validators.required
    ]),
  
    experienceLevel :new FormControl('0',[
      Validators.required
    ]),
  
    email :new FormControl(null ,[
      Validators.email, 
      Validators.required
    ]),
    password :new FormControl(null,[
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      Validators.required,
    ]),
  })


  submitRegisterForm(registerForm:FormGroup){
    this._AuthService.register(registerForm.value).subscribe((response) => {
      console.log(response);
      
      if(response.message == 'Registration done successfully'){
        this.toastr.success('Hello, this is a success message!', 'Success',{
          toastClass: 'ngx-toastr',
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
        })
        this._Router.navigate(['./login'])
      } else {
        this.error = response.error
        this.toastr.error('Oops, something went wrong!', this.error);
      }
    })
  }
  }

