import { Component } from '@angular/core';
import { LoginComponent } from '../../Auth/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLogin:boolean = false ;
  constructor(private _User:AuthService) {
    _User.currentUser.subscribe(() => {
      if( _User.currentUser.getValue() != null ){
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }
}
