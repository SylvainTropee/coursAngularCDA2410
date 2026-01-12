import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
  standalone: true
})
export class Demo1 implements OnInit, AfterViewInit{

  public username? : string;

  constructor() {
    console.log("Composant instancié");
  }

  changeName(){
    this.username = "Jean-Paul";
  }

  ngOnInit(): void {
    this.username = "Michel";
    console.log("Données initialisées")
  }

  ngAfterViewInit(){
    console.log("La vue est chargée !")
  }

  ngOnDestroy(){
    console.log("Composant détruit");
  }

}
