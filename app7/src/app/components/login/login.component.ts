import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isLogged!: boolean;
  constructor(private _UserAuthService: UserAuthService) {}
  ngOnInit() {
    this.isLogged = this._UserAuthService.isLoggedIn();
  }
  login() {
    this._UserAuthService.login('mf283617@gmail', '111222');
    this.isLogged = this._UserAuthService.isLoggedIn();
  }
  logout() {
    this._UserAuthService.logout();
    this.isLogged = this._UserAuthService.isLoggedIn();
  }
}
