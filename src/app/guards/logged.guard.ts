import { CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  let userLogged = false;
  !logged() ? alert('You dont permissions') : (userLogged = true);
  return userLogged;
};

const logged = () => {
  return prompt('Enter password') == '1234';
};
