import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api


  constructor( private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return of(HEROES.find(hero => hero.id === id));
  }


}
