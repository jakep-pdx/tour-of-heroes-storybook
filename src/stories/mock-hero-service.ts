import { Hero } from '../app/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockHeroService {

  heroes: Hero[] = [
    { id: 11, name: 'ExampleHero11' },
    { id: 12, name: 'ExampleHero12' },
    { id: 13, name: 'ExampleHero13' },
    { id: 14, name: 'ExampleHero14' },
    { id: 15, name: 'ExampleHero15' }
  ];

  hero: Hero = { id: 1, name: 'ExampleHero1' };

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of (this.heroes);
  }
  
  getHeroNo404<Data>(id: number): Observable<Hero> {
    return of (this.hero);
  }

  getHero(id: number): Observable<Hero> {
    return of (this.hero);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return of (this.heroes);
  }

  addHero (hero: Hero): Observable<Hero> {
    return of (hero);
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    return of (this.hero);
  }

  updateHero (hero: Hero): Observable<any> {
    return of (this.hero);
  }

}

