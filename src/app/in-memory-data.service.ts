import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', points: 1  },
      { id: 19, name: 'Narco', points: 20 },
      { id: 12, name: 'Bombasto', points: 600 },
      { id: 21, name: 'Celeritas', points: 10 },
      { id: 5, name: 'Magneta', points: 71000 },
      { id: 1, name: 'RubberMan', points: 300 },
      { id: 59, name: 'Dynama', points: 500 },
      { id: 45, name: 'Dr IQ', points: 1000 },
      { id: 9, name: 'Magma', points: 12222000 },
      { id: 20, name: 'Tornado', points: 90000 },
      { id: 22, name: 'new', points: 9100 },
    ];
    return {heroes};
  }
  constructor() { }
}
