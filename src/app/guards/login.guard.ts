import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const router: Router = inject(Router);

  if (token == null) {
    return true;
  }else if(role == 'admin'){
      router.navigate(['admin']);
  }else if(role == 'author'){
    router.navigate(['author-page']);
  }
  return false;
};
