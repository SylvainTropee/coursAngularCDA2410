import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mod5demo1-detail',
  imports: [],
  templateUrl: './mod5demo1-detail.html',
  styleUrl: './mod5demo1-detail.css',
  standalone: true
})
export class Mod5demo1Detail {

  public id : string | null
  public truc : string | null

  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.truc = this.route.snapshot.queryParamMap.get("truc")
  }


}
