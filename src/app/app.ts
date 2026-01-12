import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Demo1} from './mod2/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA2410');
}
