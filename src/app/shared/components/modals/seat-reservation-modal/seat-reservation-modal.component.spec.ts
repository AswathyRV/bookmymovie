import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatReservationModalComponent } from './seat-reservation-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('SeatReservationModalComponent', () => {
  let component: SeatReservationModalComponent;
  let fixture: ComponentFixture<SeatReservationModalComponent>;
  let matDialog: MatDialog;
  let router: Router;
  let dialogRef: MatDialogRef<SeatReservationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatReservationModalComponent],
      imports: [MatDialog, MatDialogRef, MAT_DIALOG_DATA],
      providers: [MatDialog, Router],
      schemas: [ NO_ERRORS_SCHEMA ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatReservationModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
  // onCloseConfirm
  it('onCloseConfirm', () => {
    expect(dialogRef.close).toBe("Confirm");
    component.onCloseConfirm();
  });
  // onNoClick
  it('onNoClick', () => {
   expect(dialogRef.close).toBe("");
   component.onNoClick();
  });
  // onCloseCancel
  it('onCloseCancel', () => {
    expect(dialogRef.close).toBe("Cancel");
    component.onCloseCancel();
   });
   // getStatus
   it('getStatus', () => {
    const mockseatPos = "D4";
    expect(component.getStatus(mockseatPos)).toBe("selected");
    component.getStatus(mockseatPos);
   });
   // seatClicked
   it('seatClicked', () => {
    const mockseatPos = "A4";
    component.seatClicked(mockseatPos);
   });

});
