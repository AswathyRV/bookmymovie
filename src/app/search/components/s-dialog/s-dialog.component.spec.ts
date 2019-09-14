import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import { Component, Directive } from '@angular/core';
import { SDialogComponent } from './s-dialog.component';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { HomeService } from '../../../home/services/home.service';
import { MovieListService } from '../../../core/movie/movie-list.service';
import { SegregateMovieService } from '../../services/segregate-movie.service';
import { SearchApiService } from '../../services/search-api.service';

@Injectable()
class MockMovieStore {}

@Injectable()
class MockHomeService {}

@Injectable()
class MockMovieListService {}

@Injectable()
class MockSegregateMovieService {}

@Injectable()
class MockSearchApiService {}

describe('SDialogComponent', () => {
  let fixture;
  let component;
  let movieStore: Store<MovieState.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDialogComponent],
      providers: [
        { provide: movieStore, useClass: MockMovieStore },
        { provide: HomeService, useClass: MockHomeService },
        { provide: MovieListService, useClass: MockMovieListService },
        { provide: SegregateMovieService, useClass: MockSegregateMovieService },
        { provide: SearchApiService, useClass: MockSearchApiService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(SDialogComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #changeGenere()', async () => {
    // const result = component.changeGenere();
  });

  it('should run #ngOnDestroy()', async () => {
    // component.ngOnDestroy();
  });
});
