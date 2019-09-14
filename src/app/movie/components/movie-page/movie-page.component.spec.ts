import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { MoviePageComponent } from './movie-page.component';
import * as MovieState from '../../../reducers/index';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { TMDB_URLS } from 'src/app/shared/config';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { MockMatDialog } from 'src/app/shared/test/MockMatDialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeatReservationModalComponent } from '../../../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component';
import { MovieService } from '../../services/movie.service';
import { Store, State } from '@ngrx/store';
import { PreBookingComponent } from '../../../shared/components/modals/pre-booking/pre-booking.component';

fdescribe('MoviePageComponent', () => {
  let fixture;
  let component;
  let imagesPath;
  let castCrew;
  let movieDescription;
  let theaterList;
  let category;
  let selectTheater: FormControl;
  let minDate;
  let date;
  let selectedTheater;
  let selectedDate;
  let dialogResult;
  let rating;
  let selectedTime;
  let dialog;
  let spy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule, MaterialModule,  MovieState, TMDB_URLS],
      declarations: [MoviePageComponent, SeatReservationModalComponent, PreBookingComponent],
      providers: [{ provide: dialog, useClass: MockMatDialog } , MovieService , Store],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.debugElement.componentInstance;
    imagesPath = TMDB_URLS.IMAGE_URL;
    castCrew = TMDB_URLS.CAST_CREW_BIG;
    minDate = new Date();
    date = new FormControl(minDate);
    rating = new Array(5);
    dialog = TestBed.get(MatDialog);
    selectTheater = TestBed.get(FormControl);
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  fit('should run #ngOnInit()', async () => {
    spy = spyOn(window, 'scrollTo').and.returnValue(false);
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should run #ngOnChanges()', async () => {
    selectTheater = new FormControl();
    theaterList[0] = [];
    selectTheater.setValue(theaterList[0]);
    selectedTheater = theaterList[0];
    let responseSelectedTheater: Observable<any>;
    expect(selectTheater.valueChanges).toBe(responseSelectedTheater);
    selectedTheater = responseSelectedTheater;
    let responseDate: Observable<any>;
    responseDate.subscribe(
      value => {
        value = '12-09-2019';
        selectedDate = value.toJSON();
        return selectedDate;
      },
      error => {
        console.log(error);
      }
    );
    spy = spyOn(date, 'valueChanges').and.returnValue(responseDate);
    expect(date.valueChanges).toHaveBeenCalled();
    const result = component.ngOnChanges();
  });

  it('should run #checKToDialog()', async () => {
    // const result = component.checKToDialog();
  });

  it('should run #preBookDialog()', async () => {
    // const result = component.preBookDialog();
  });

  it('should run #openDialog()', async () => {
    // component.openDialog();
  });

  it('should run #onValChange()', async () => {
    // const result = component.onValChange(val);
  });

  it('should run #isInvalid()', async () => {
    // const result = component.isInvalid();
  });

  it('should run #trackCastandCrew()', async () => {
    // const result = component.trackCastandCrew(index, cast);
  });
});
