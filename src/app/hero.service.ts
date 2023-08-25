import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // RxJS of() to return Observable<Hero[]>, an observable of mock heroes.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.  Utilise pour les appels asynchone pour eviter d'attendre data

  constructor(private messageService: MessageService) { }
}
