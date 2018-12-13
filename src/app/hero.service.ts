import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  msg: string;
  tmpResult: Hero[] = [];
  private heroesUrl = '/api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(
          this.handleError('getHeroes', [])));
  }
  getHero(id: number): Observable<Hero> {
    this.msg = 'HeroService: fetched hero id=';
    this.msg += id;
    this.messageService.add(this.msg);
    return of(HEROES.find(hero => hero.id === id ));
  }
  get5FirsttHero(): Observable<Hero[]> {
      this.msg = 'HeroService: fetched 5first heroes';
      this.messageService.add(this.msg);
      return of(HEROES.slice(0, 5));
  }

  getTop5HeroesByPoints(): Observable<Hero[]>{
      this.messageService.add('sorting...');
      // tmpResult : HEROES[] = [];
      this.msg = 'HeroService: fetched top 5 heroes have hightest points';
      this.messageService.add(this.msg);

      // this.tmpResult = HEROES[0].clone();
      // this.tmpResult = this.clone(HEROES);
      this.tmpResult = Object.assign([], HEROES);

      this.tmpResult.sort(function(a, b){
        var x = a.points; var y = b.points;
        return ((x<y)? 1 : (  (x>y) ? -1 : 0)   );
      });
      return of(this.tmpResult.slice(0,5));
  }



  log(input: string): void {
  	this.messageService.add(input);
  }

  private handleError<T>(operation = 'operation', result? : T){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.msg = operation;
      this.msg += 'failed: ';
      this.msg += error.message;
      this.log(this.msg);

      return of(result as T);
    }
  }

  // cloneHeroes(src: Hero[]): Hero[]{
  //   var result : Hero[];
  //   for (var he)
  //   // return Object.assign({}, src);
  // };
}
