import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-modcomp1',
  imports: [],
  templateUrl: './modcomp1.html',
  styleUrl: './modcomp1.css',
  standalone: true
})
export class Modcomp1 {

  joke;

  constructor(private jokeService : Mod8service) {
    this.joke = this.jokeService.joke
  }
  loadJoke(){
    this.jokeService.getJoke()
  }

}
