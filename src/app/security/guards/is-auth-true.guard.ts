import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth.service';



export const isAuthTrueGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if(authService.getToken())
    {
      router.navigate(['/modulos']);
      return false;  
    }
    return true;
};
