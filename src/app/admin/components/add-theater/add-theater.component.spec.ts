import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTheaterComponent } from './add-theater.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule, FormsModule, Form } from '@angular/forms';
import { NO_ERRORS_SCHEMA, TemplateRef, EventEmitter } from '@angular/core';
describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;
  let matDialog: MatDialog;
  let successDialog: TemplateRef<any>;
  let addTheater = new EventEmitter();
  let fb: FormBuilder;
  let newTheater: Form;
   class MockMatDialog {
    open() {
      return successDialog.createEmbeddedView(' <div>New Theater added sucessfully </div>');
    }
    closeAll() {
      return {};
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTheaterComponent],
      imports: [ReactiveFormsModule, FormsModule, MatDialogModule,  MatDialog , MatDialogRef],
      providers: [{ provide: matDialog, useClass: MockMatDialog }, FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
    newTheater =fixture.nativeElement.form
    component.ngOnInit();
    fixture.detectChanges();
  });
   it('ngOnInit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('form newTheater formbuilder', () => {
    expect(fb.group).toBe(component.newTheater);
  });
  it('form invalid when empty', () => {
    expect(component.newTheater.valid).toBeFalsy();
  });
  it('tid formcontrol validation', () => {
    let tid = component.newTheater.controls['tid'];
    expect(tid.valid).toBeFalsy();
    let errors = {};
    errors = tid.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('name formcontrol validation', () => {
    let name = component.newTheater.controls['name'];
    expect(name.valid).toBeFalsy();
    let errors = {};
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('city formcontrol validation', () => {
    let city = component.newTheater.controls['city'];
    expect(city.valid).toBeFalsy();
    let errors = {};
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('gLocation formcontrol validation', () => {
    let gLocation = component.newTheater.controls['gLocation'];
    expect(gLocation.valid).toBeFalsy();
    let errors = {};
    errors = gLocation.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('capacity formcontrol validation', () => {
    let capacity = component.newTheater.controls['capacity'];
    expect(capacity.valid).toBeFalsy();
    let errors = {};
    errors = capacity.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('onSubmit()  on form submission', () => {
    expect(component.newTheater.valid).toBeFalsy();
    component.newTheater.controls['tid'].setValue('123');
    component.newTheater.controls['name'].setValue('Krishna');
    component.newTheater.controls['city'].setValue('Bengaluru');
    component.newTheater.controls['gLocation'].setValue('India');
    component.newTheater.controls['capacity'].setValue('5');
    expect(component.newTheater.valid).toBeTruthy();
    expect(matDialog.open).toBe(MockMatDialog);
    expect(addTheater.emit).toBe(component.newTheater.value);
    component.onSubmit();
  });
  it('dialogOk', () => {
    expect(component.newTheater.reset).toBeTruthy();
    expect(matDialog.closeAll).toBe({});
    component.dialogOk();
  });
});
