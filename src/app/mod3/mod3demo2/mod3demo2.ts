import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgStyle, UpperCasePipe} from '@angular/common';


import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr)

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgStyle,
    UpperCasePipe,
    DatePipe,

  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
  standalone: true
})
export class Mod3demo2 {

  public users: string[];//Array<string>
  public date: Date
  public name?: string;

  constructor() {
    this.users = []
    this.date = new Date();
  }

  resetName() {
    this.name = ""
  }

  addUser() {
    if (this.name) {
      this.users.push(this.name)
      this.resetName()
    }
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}
