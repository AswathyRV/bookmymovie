import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { UserDetailService } from './core/services/userDetails.service';
import { HomeService } from './home/services/home.service';

describe('AppComponent', () => {
  let homeService: HomeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SwUpdate, MatSnackBar, UserDetailService, HomeService],
      declarations: [AppComponent],
      providers: [SwUpdate, MatSnackBar, UserDetailService, HomeService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const title = fixture.debugElement.componentInstance.title;
    expect(app.title).toEqual("book-my-movie");

  });

  it('ngOnit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
       expect(homeService.getNowshowing).toHaveBeenCalled;
       expect(homeService.getTheaterList).toHaveBeenCalled;
       expect(homeService.fetchGenres).toHaveBeenCalled;
       app.ngOnit();


  });
});
