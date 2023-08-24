import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hheroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  


getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroesR => this.hheroes = heroesR);
}

ngOnInit(): void {
  this.getHeroes();
}

constructor(private heroService: HeroService) {} // Permet de d'injecter le service 

//Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. 

}
