import { async } from '@angular/core/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service;

  const http: any = {
    // mock properties here
  };

  const store: any = {
    // mock properties here
  };

  beforeEach(() => {
    service = new HomeService(http, store);
  });

  it('should run #getNowshowing()', async () => {
    // const result = getNowshowing(page);
  });

  it('should run #getUpcomingMovies()', async () => {
    // const result = getUpcomingMovies(page);
  });

  it('should run #getGenres()', async () => {
    // const result = getGenres();
  });

  it('should run #fetchGenres()', async () => {
    // const result = fetchGenres();
  });

  it('should run #getCastAndCrew()', async () => {
    // const result = getCastAndCrew(movies);
  });

  it('should run #getTheaterList()', async () => {
    // const result = getTheaterList();
  });

  it('should run #getUserPreference()', async () => {
    // const result = getUserPreference();
  });

  it('should run #setPreference()', async () => {
    // const result = setPreference(newPreference, currentUserId);
  });
});
