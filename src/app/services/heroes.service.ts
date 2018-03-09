import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  url: string = 'https://heroes-crud-ed626.firebaseio.com/';

  constructor(private http: HttpClient) { }

  store(hero: Hero) {
    return this.http.post(this.url + 'heroes.json', hero);
  }

}
