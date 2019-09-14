import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable()
class MockRouter {
  // navigate = jest.fn();
}

describe('SearchComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [MatDialog, { provide: Router, useClass: MockRouter }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #openSearchPage()', async () => {
    // component.openSearchPage();
  });
});
