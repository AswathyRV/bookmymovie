import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentBookingComponent } from './payment-booking.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';

fdescribe('PaymentBookingComponent', () => {
  let component: PaymentBookingComponent;
  let fixture: ComponentFixture<PaymentBookingComponent>;
  let dialog: MatDialog;
  let router: ActivatedRoute;
  let dialogRef: MatDialogRef<ConfirmationModalComponent>;
  class MockDialog{
    open(){
      return false;
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBookingComponent],
      imports: [MatDialog, MatDialogRef, MAT_DIALOG_DATA, ConfirmationModalComponent],
      providers: [{provide: dialog , useClass: MockDialog}, ActivatedRoute],
      schemas: [ NO_ERRORS_SCHEMA ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBookingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  // openConfirmDialog
  it('openConfirmDialog', () => {
    expect(dialog.open).toBe(false);
    expect(component.openConfirmDialog).toBeTruthy();
   });

});
