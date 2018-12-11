import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]>{
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }
  log(input: string): void {
  	this.messageService.add(input);
  }
}
