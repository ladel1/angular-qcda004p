import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Injection de dépendance
  const authService = inject(AuthService);
  const router = inject(Router);
  // vérification de l'état de authentification
  if(!authService.isAuthenticated()){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
