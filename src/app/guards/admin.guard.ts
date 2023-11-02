import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const router:Router = inject(Router);
  
  if (token && role == 'admin') {
    return true
  }
  router.navigate(['/admin/login']);
  return false;
};
