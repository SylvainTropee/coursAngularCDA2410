import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth} from '../mod4/auth';

export const authGuard: CanActivateFn = (
  route, state
) => {

  const authService = inject(Auth)
  const router = inject(Router);

  if(authService.isLogged()){
    return true
  }else{
    router.navigate(["/about-us"], {queryParams : {message : "Accès interdit"}})
    return false;
  }
};
