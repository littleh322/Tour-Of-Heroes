import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes', //top-layer <selector />
  templateUrl: './heroes.component.html', //html layout
  styleUrls: ['./heroes.component.css'] //private css
})
export class HeroesComponent implements OnInit {
  //iterpolation variable
  iterpolation = 'Here are some heroes:';
  hero: Hero = { id: 1, name: 'Windstorm' };

  constructor() {}

  ngOnInit(): void {}
}
