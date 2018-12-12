import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;
	// heroService: HeroService;

	constructor(private heroService: HeroService) {
		this.getHeroes();
		// this.heroService = heroService;

	}

	ngOnInit() {
	}
	onSelect(hero: Hero): void{
		this.selectedHero = hero;
		this.heroService.log('HeroDetail: load details of '+ this.selectedHero.name);
	}
	getHeroes(): void {

		this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
	}

}
