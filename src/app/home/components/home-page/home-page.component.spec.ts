import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';      
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {HomePageComponent} from './home-page.component';
import {HomeService} from '../../services/home.service';

@Injectable()
class MockHomeService { }

describe('HomePageComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent
      ],
      providers: [
        {provide: HomeService, useClass: MockHomeService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #trackMovie()', async () => {
    // const result = component.trackMovie(index, movie);
  });

  it('should run #getMovies()', async () => {
    // const result = component.getMovies();
  });

  it('should run #tabChanged()', async () => {
    // const result = component.tabChanged(event);
  });

  it('should run #getLanguage()', async () => {
    // const result = component.getLanguage(lang);
  });

  it('should run #getGenre()', async () => {
    // const result = component.getGenre(g);
  });

});