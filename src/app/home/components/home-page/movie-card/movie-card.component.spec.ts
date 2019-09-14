import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';      
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {MovieCardComponent} from './movie-card.component';
import {MatDialog} from '@angular/material';

describe('MovieCardComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCardComponent
      ],
      providers: [
        MatDialog,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #ngOnChanges()', async () => {
    // const result = component.ngOnChanges();
  });

  it('should run #onValChange()', async () => {
    // const result = component.onValChange(val);
  });

  it('should run #isInvalid()', async () => {
    // const result = component.isInvalid();
  });

  it('should run #checKToDialog()', async () => {
    // const result = component.checKToDialog();
  });

  it('should run #preBookDialog()', async () => {
    // const result = component.preBookDialog();
  });

  it('should run #openDialog()', async () => {
    // component.openDialog();
  });

  it('should run #trackCastandCrew()', async () => {
    // const result = component.trackCastandCrew(index, cast);
  });

});