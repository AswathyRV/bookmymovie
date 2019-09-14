import { async } from '@angular/core/testing';
import { HomeFilterPipe } from './home-filter.pipe';

let spy: any;

describe('HomeFilterPipe', () => {
  it('should run #transform()', () => {
    const pipe = new HomeFilterPipe();
    const filteredMovieList: any = [];
    let check = 4;
    let breaker = 1;
    let movieList = [ "Tom & Jerry"];
    let genreInput = [];
    let languagePref = ["English"];
     class MockOutputifCondition1 { check = 1;  breaker = 0; };
     class MockOutputifCondition2 { check = 2;  breaker = 0; };
     class MockOutputifCondition3 { check = 3;  breaker = 0; };

    const result = pipe.transform(movieList, genreInput, languagePref);
    spy = spyOn(pipe , 'transform').and.callThrough();
    expect(result).toBeTruthy();
  });
});
