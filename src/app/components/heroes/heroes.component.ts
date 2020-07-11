import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../services/hero-service/hero.service';
import { MessageService } from 'src/app/services/message-service/message.service';

@Component({
  selector: 'app-heroes', //top-layer <selector />
  templateUrl: './heroes.component.html', //html layout
  styleUrls: ['./heroes.component.css'] //private css
})
export class HeroesComponent implements OnInit {
  //iterpolation variable
  // iterpolation = 'This called interpolation';
  // hero: Hero = { id: 1, name: 'Windstorm' }; // removed

  heroes: Hero[];

  /**REMOVED */
  /*selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.messageService.add('Heroes List View');
  }
}
