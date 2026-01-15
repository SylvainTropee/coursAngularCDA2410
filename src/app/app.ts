import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Demo1} from './mod3/demo1/demo1';
import {Mod3demo2} from './mod3/mod3demo2/mod3demo2';
import {Mod4demo1} from './mod4/mod4demo1/mod4demo1';
import {Mod6demo1} from './mod6/mod6demo1/mod6demo1';
import {Mod7demo1} from './mod7/mod7demo1/mod7demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1, Demo1, Mod3demo2, Mod4demo1, Mod6demo1, Mod7demo1],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA2410');
}
