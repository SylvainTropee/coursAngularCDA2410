import {Component, inject} from '@angular/core';
import {Auth} from '../auth';

@Component({
  selector: 'app-mod4demo1',
  imports: [],
  templateUrl: './mod4demo1.html',
  styleUrl: './mod4demo1.css',
  standalone: true
})
export class Mod4demo1 {
  username?: string;
  private authService2 : Auth = inject(Auth);

  constructor(private authService : Auth) {
   // this.authService = authService

  }

  logout() {
    this.authService.logout();
    this.username = ""
  }

  login() {
    this.authService.login()
    this.username = this.authService.getUser().name
  }
}
