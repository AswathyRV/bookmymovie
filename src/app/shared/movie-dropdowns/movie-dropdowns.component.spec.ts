import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDropdownsComponent } from './movie-dropdowns.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
 import { Component, OnInit, EventEmitter, Output, Input ,NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin.service';

fdescribe('MovieDropdownsComponent', () => {
  let component: MovieDropdownsComponent;
  let fixture: ComponentFixture<MovieDropdownsComponent>;
  let dialog: MatDialog;
  let router: ActivatedRoute;
  let homeService: HomeService;
  let genresList: any = [];
  let layout;
  let languageList;
  let languageChange$: EventEmitter<any>;
  let genreChange$: EventEmitter<any>;
  let distanceChange$: EventEmitter<any>;
  let languageSelected = false;
  let genreSelected = false;
  let genreObj = { value: '' };
  let distanceSelected: number;
  let languageSelector: FormControl;
  let generSelector: FormControl;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDropdownsComponent],
      imports: [MatDialog, MatDialogRef, MAT_DIALOG_DATA , FormControl, EventEmitter],
      providers: [MatDialog, ActivatedRoute , HomeService],
      schemas: [ NO_ERRORS_SCHEMA ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDropdownsComponent);
    component = fixture.componentInstance;
    homeService = TestBed.get(AdminService);
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    expect(component).toBeTruthy();
  });
});
