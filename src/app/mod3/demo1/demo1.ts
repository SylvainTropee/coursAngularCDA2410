import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mod3-demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
  standalone: true
})
export class Demo1 {

  public name? : string;

  ngOnInit(){
    this.name = "Raymond";
  }

  resetName(){
    this.name = "";
  }

}
