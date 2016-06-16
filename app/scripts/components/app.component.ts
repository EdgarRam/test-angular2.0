import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroDetailComponent } from '../directives/hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html',
  styleUrls: [ 'app/styles/app.component.css' ],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }
}
