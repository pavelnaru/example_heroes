import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  msg: string;
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]>{
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }
  getHero(id: number): Observable<Hero>{
  		this.msg = 'HeroService: fetched hero id=';
  		this.msg += id;
  		this.messageService.add(this.msg);
  		return of(HEROES.find(hero => hero.id === id ));

  }
  log(input: string): void {
  	this.messageService.add(input);
  }
}
