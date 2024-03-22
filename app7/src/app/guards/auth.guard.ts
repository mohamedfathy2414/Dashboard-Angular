import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _UserAuthService = inject(UserAuthService);

  return _UserAuthService.isLoggedIn();
};
