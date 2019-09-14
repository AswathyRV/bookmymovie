import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ChangeShowComponent } from './change-show.component';
import { AdminService } from '../../services/admin.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { theaterList } from 'src/app/reducers';
import { MatDialog } from '@angular/material';

describe('ChangeShowComponent', () => {
  let component: ChangeShowComponent;
  let fixture: ComponentFixture<ChangeShowComponent>;
  let theaterListInputMock: any;
  let movieInput: FormControl;
  let selectTheater: FormControl;
  let movieResult: any;
  let selectedTheater;
  let nowShowing = [];
  let nowPlaying = [];
  let successDialog: TemplateRef<any>;
  let adminService: AdminService;
  let matDialog: MatDialog;
  let spy: any;
  class MockMatDialog {
    open() {
      return successDialog.createEmbeddedView(' <div>New Movies added sucessfully </div>');
    }
    closeAll() {
      return {};
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeShowComponent],
      imports: [AdminService, FormControl, ReactiveFormsModule, theaterList, MatDialog],
      providers: [AdminService, { provide: matDialog, useClass: MockMatDialog }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeShowComponent);
    component = fixture.componentInstance;
    adminService = TestBed.get(AdminService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    let movieInput = fixture.debugElement.nativeElement.FormControl['movieInput'];
    movieResult = {};
    expect(movieInput.change).toBeTruthy();
    expect(adminService.searchMovie).toBe(movieResult);
    expect(component.ngOnInit).toBeTruthy();
  });
  it('constructor intialization', () => {
    let MockMovieInput = fixture.debugElement.nativeElement.FormControl['movieInput'];
    expect(MockMovieInput).toBe('');
    let MockSelectTheater = fixture.debugElement.nativeElement.FormControl['selectTheater'];
    expect(MockSelectTheater).toBe('');
  });
  it('addMovie', () => {
    const mockMovie = [];
    component.addMovie(mockMovie);
    expect(component.addMovie).toBe(mockMovie);
  });
  it('save', () => {
    expect(matDialog.open).toBe(MockMatDialog);
    spy = spyOn(adminService, 'saveNowPlaying').and.returnValue(false); (3)
    expect(component.save()).toBeTruthy();
    expect(adminService.saveNowPlaying).toHaveBeenCalled();
    component.save();
  });
  it('cancel', () => {
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });
  it('dialogOk', () => {
    expect(nowPlaying.values).toBe("");
    expect(movieInput.reset).toHaveBeenCalled();
    expect(selectTheater.reset).toHaveBeenCalled();
    expect(matDialog.closeAll).toBe(MockMatDialog);
    expect(movieResult.values).toBe([]);
    component.dialogOk();
  });
});
