import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../Components/Auth/login/login.component';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService)
  const router = inject(Router)
  if(Auth.currentUser.getValue() != null){
    return true;
  } else {
    router.navigate(['/login']);
    return false
  }
};
