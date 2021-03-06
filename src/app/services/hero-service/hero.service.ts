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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
