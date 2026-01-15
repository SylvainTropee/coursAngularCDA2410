import {computed, Injectable, signal} from '@angular/core';
import {Joke} from '../mod7/joke';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mod8service {

  private _joke = signal<Joke | null>(null)
  readonly joke = this._joke.asReadonly()

  readonly jokeLength
    = computed(() => this._joke()?.value.length)

  private readonly BASE_URL = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient) {
  }


  public async getJoke2() {
    const joke = await firstValueFrom(this.http.get<Joke>(this.BASE_URL))
    this._joke.set(joke)
  }

  public getJoke(){

    this.http.get<Joke>(this.BASE_URL).subscribe(
      joke => {
        this._joke.set(joke)
      }
    )

  }

}
