import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes', //top-layer <selector />
  templateUrl: './heroes.component.html', //html layout
  styleUrls: ['./heroes.component.css'] //private css
})
export class HeroesComponent implements OnInit {
  //iterpolation variable
  // iterpolation = 'This called interpolation';
  hero: Hero = { id: 1, name: 'Windstorm' };

  heroes: Hero[] = HEROES;

  constructor() {}

  ngOnInit(): void {}
}
