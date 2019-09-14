import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';
import { Store, State } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';

@Injectable()
class MockMovieStore {}

@Injectable()
class MockUserStore {}

@Injectable()
class MockHomeService {}

describe('HomeComponent', () => {
  let fixture;
  let component;
  let storeMovie: Store<MovieState.State>;
  let storeUser: Store<UserState.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: storeMovie, useClass: MockMovieStore },
        { provide: storeUser, useClass: MockUserStore },
        { provide: HomeService, useClass: MockHomeService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #getNewSetofNowPlayingMovies()', async () => {
    // const result = component.getNewSetofNowPlayingMovies(page);
  });

  it('should run #getNewSetofComingMovies()', async () => {
    // const result = component.getNewSetofComingMovies(page);
  });
});
