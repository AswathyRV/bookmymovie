import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;
  let matDialog: MatDialog;
  let router: Router;
  let dialogRef: MatDialogRef<ConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponent],
      imports: [MatDialog, MatDialogRef, MAT_DIALOG_DATA],
      providers: [MatDialog, Router],
      schemas: [ NO_ERRORS_SCHEMA ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
  // onCloseConfirm
  it('onCloseConfirm', () => {
   expect(dialogRef.close).toBe("close");
   expect(router.navigate).toHaveBeenCalled();
   component.onCloseConfirm();
  });

});
