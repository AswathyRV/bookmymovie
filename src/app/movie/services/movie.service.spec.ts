import { async } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service;

  const http: any = {
    // mock properties here
  };

  beforeEach(() => {
    service = new MovieService(http);
  });

  it('should run #getMovie()', async () => {
    // const result = getMovie(id);
  });

  it('should run #getCastAndCrew()', async () => {
    // const result = getCastAndCrew(id);
  });
});
