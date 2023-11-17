import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const limitGuard: CanActivateFn = () => {
  const router:Router = inject(Router);
  const role = localStorage.getItem('role')
  if (role == 'admin') {
    return true
  }
  router.navigate(['/admin/login']);
  return false;
};
