import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authorGuard: CanActivateChildFn = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const router:Router = inject(Router);

  if (token && role == 'author') {
      return true;
    }
    router.navigate(['/admin/login']);
    return false;
};
