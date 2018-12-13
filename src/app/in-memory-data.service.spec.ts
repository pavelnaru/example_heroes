import { TestBed } from '@angular/core/testing';
import { InMemoryDbService } from 'angular-in-memory-web-api';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
