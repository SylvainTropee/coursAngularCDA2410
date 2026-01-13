import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  login() {
    const user = {name: "Michel"};
    localStorage.setItem("user", JSON.stringify(user))
  }

  logout() {
    localStorage.removeItem("user")
  }

  isLogged() {
    const user = localStorage.getItem('user')
    return !!user;
  }

  getUser() {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('user')!);
    }

  }

}
