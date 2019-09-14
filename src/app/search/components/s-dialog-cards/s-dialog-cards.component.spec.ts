import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import { Component, Directive } from '@angular/core';
import { SDialogCardsComponent } from './s-dialog-cards.component';
import * as UserState from '../../../reducers/index';
import { Store } from '@ngrx/store';

@Injectable()
class MockUserStore {}

describe('SDialogCardsComponent', () => {
  let fixture;
  let component;
  let userStore: Store<UserState.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDialogCardsComponent],
      providers: [{ provide: userStore, useClass: MockUserStore }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(SDialogCardsComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // component.ngOnInit();
  });

  it('should run #ngAfterContentChecked()', async () => {
    // const result = component.ngAfterContentChecked();
  });

  it('should run #ngDoCheck()', async () => {
    // component.ngDoCheck();
  });
});
