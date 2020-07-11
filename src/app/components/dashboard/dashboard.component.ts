import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';
import { MessageService } from 'src/app/services/message-service/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 4)));
    this.messageService.add('Dashboard View');
  }
}
