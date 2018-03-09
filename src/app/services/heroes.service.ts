import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  url: string = 'https://heroes-crud-ed626.firebaseio.com/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}heroes.json`);
  }

  store(hero: Hero) {
    return this.http.post(this.url + 'heroes.json', hero);
  }

  destroy(id: string) {
    return this.http.delete(`${this.url}heroes/${id}.json`);
  }

}
