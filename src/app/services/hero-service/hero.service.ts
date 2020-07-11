import { Injectable } from '@angular/core';
import { Hero } from '../../components/heroes/hero';
import { HEROES } from '../../components/heroes/mock-heroes';
import { MessageService } from '../../services/message-service/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => (hero.id = id)));
  }
}