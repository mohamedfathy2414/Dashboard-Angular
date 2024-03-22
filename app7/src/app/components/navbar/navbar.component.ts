import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogged: boolean = false;
  constructor(private UserAuthService: UserAuthService) {}
  ngOnInit() {
    // this.isLogged = this.UserAuthService.isLoggedIn();
    this.UserAuthService.getLoggedStatus().subscribe((status) => {
      this.isLogged = status;
    });
  }
}
