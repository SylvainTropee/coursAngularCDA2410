import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-mod5demo1',
  imports: [
    RouterLink
  ],
  templateUrl: './mod5demo1.html',
  styleUrl: './mod5demo1.css',
  standalone: true
})
export class Mod5demo1 {
  about: string = "/about-us"


  constructor(private router : Router) {
  }

  goToAbout(){
    this.router.navigate(["/about-us"])
  }

  goToDetail(){
    this.router.navigate(['/detail', 126])
  }

}
