import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/scripts/directives/hero-detail.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
