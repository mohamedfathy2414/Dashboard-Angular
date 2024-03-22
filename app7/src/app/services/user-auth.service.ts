import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isloggesStatus: BehaviorSubject<boolean>;
  constructor() {
    this.isloggesStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  }
  login(email: string, password: string) {
    let token = 'ookokko';
    localStorage.setItem('token', token);
    this.isloggesStatus.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isloggesStatus.next(false);
  }
  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
  getLoggedStatus(): BehaviorSubject<boolean> {
    return this.isloggesStatus;
  }
}
