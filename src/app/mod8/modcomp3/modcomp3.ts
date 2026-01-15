import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-modcomp3',
  imports: [],
  templateUrl: './modcomp3.html',
  styleUrl: './modcomp3.css',
  standalone: true
})
export class Modcomp3 {

  jokeLength

  constructor(private jokeService : Mod8service) {
    this.jokeLength = this.jokeService.jokeLength
  }
}
