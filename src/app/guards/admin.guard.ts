import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token');
  const router:Router = inject(Router);
if (token) { 
   return true;
  }
router.navigate(['/admin/login']);
return false;

};
