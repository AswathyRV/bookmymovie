import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import { Component, Directive } from '@angular/core';
import { MovieComponent } from './movie.component';
import { Movie } from '../../../home/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';

@Injectable()
class MockMovieStore {}

@Injectable()
class MockMovieService {}

describe('MovieComponent', () => {
  let fixture;
  let component;
  let movieStore: Store<MovieState.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      providers: [
        { provide: movieStore, useClass: MockMovieStore },
        ActivatedRoute,
        { provide: MovieService, useClass: MockMovieService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #ngAfterContentInit()', async () => {
    // const result = component.ngAfterContentInit();
  });
});
