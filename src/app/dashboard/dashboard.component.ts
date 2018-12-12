import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../heroes/heroes.component.html',
  // templateUrl: './dashboard.component.html',
  styleUrls: ['../heroes/heroes.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[];
  constructor(private heroService: HeroService) { 
    this.getTop5();
    // this.heroService.getTop5HeroesByPoints().subscribe(result => this.heroes = result);
    console.log('DashboardComponent - constructor');
  }

  ngOnInit() {
    console.log('DashboardComponent - ngOnInit');
  }
  getTop5 (): void {
  	this.heroService.getTop5HeroesByPoints().subscribe(result => this.heroes = result);
  }


}
