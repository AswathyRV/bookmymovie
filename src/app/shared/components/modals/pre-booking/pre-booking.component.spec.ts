import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreBookingComponent } from './pre-booking.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('PreBookingComponent', () => {
  let component: PreBookingComponent;
  let fixture: ComponentFixture<PreBookingComponent>;
  let matDialog: MatDialog;
  let router: Router;
  let dialogRef: MatDialogRef<PreBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreBookingComponent],
      imports: [MatDialog, MatDialogRef, MAT_DIALOG_DATA],
      providers: [MatDialog, Router],
      schemas: [ NO_ERRORS_SCHEMA ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreBookingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
  // onNoClick
  it('onNoClick', () => {
   expect(dialogRef.close).toBe("");
   component.onNoClick();
  });

});
