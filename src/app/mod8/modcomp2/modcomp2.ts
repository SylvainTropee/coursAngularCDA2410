import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-modcomp2',
  imports: [],
  templateUrl: './modcomp2.html',
  styleUrl: './modcomp2.css',
  standalone: true
})
export class Modcomp2 {


  joke;

  constructor(private jokeService : Mod8service) {
    this.joke = this.jokeService.joke
  }

}
