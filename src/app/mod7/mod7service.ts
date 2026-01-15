import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from './joke';
import {catchError, distinctUntilChanged, map, retry, switchMap, tap, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mod7service {

  private readonly BASE_URL = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient) {
  }

  getJoke() {
    return this.http.get<any>(this.BASE_URL)
  }

  getJoke2(){
    return this.http.get<Joke>(this.BASE_URL)
  }

  getJoke3(){
    return this.http.get<any>(this.BASE_URL).pipe(
      map(
        response => {
          return {
            id : response.id,
            value : response.value,
            iconUrl : response.icon_url
          } as Joke
        }
      ),
      tap(
        //intéressante pour logger
      ),
      distinctUntilChanged(),
      //bloque le flux si la réponse est identitique,
      //chainer des appels à des API
      switchMap(
        joke =>  this.http.get<Joke>(this.BASE_URL)
      ),
      retry(3),
      timeout(2000)
      //catchError(err => {})
    )
  }

}
