import { async } from '@angular/core/testing';
import { SortMoviePipe } from './sort-movie.pipe';

describe('SortMoviePipe', () => {
  let spy: any;
  it('should run #transform()', () => {
    const pipe = new SortMoviePipe();
    let moviesList: any;
    let userPref: any;
    let preferedList: Object[] = [];
    let remainingList: Object[] = [];

    const result = pipe.transform(moviesList, userPref);
    moviesList =["Tom & Jerry"];
    userPref = [];
    expect(moviesList.length()).toBe(1);
    expect(userPref).toBeTruthy();
    let genres = userPref.genre;
    let language = userPref.language;
    spy = spyOn(pipe , 'transform').and.callThrough();
    expect(result).toBeTruthy();
  });
});
