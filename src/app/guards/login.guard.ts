import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  const router: Router = inject(Router);

  if (token == null) {
    return true;
  }else{
      router.navigate(['admin']);
  }
  return false;
};
