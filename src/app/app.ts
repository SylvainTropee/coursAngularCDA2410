import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Demo1} from './mod3/demo1/demo1';
import {Mod3demo2} from './mod3/mod3demo2/mod3demo2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1, Demo1, Mod3demo2],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA2410');
}
