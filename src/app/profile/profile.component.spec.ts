import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { HomeService } from '../home/services/home.service';
import { LoginService } from '../core/services/login.service';
import { Store } from '@ngrx/store';
import * as UserState from '../reducers/index';
import { SetUser } from 'src/app/core/store/action/userDetails.action';
import { User } from 'src/app/core/models/user.model';
import { MatDialog } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ProfileComponent } from './profile.component';
@Injectable()
class MockHomeService {}

@Injectable()
class MockLoginService {}

@Injectable()
class MockFormBuilder {}

@Injectable()
class MockUserStore {}

@Injectable()
class MockMatDialog {}

describe('ProfileComponent', () => {
  let fixture;
  let component;
  let storeUser: Store<UserState.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: HomeService, useClass: MockHomeService },
        { provide: LoginService, useClass: MockLoginService },
        { provide: FormBuilder, useClass: MockFormBuilder },
        { provide: storeUser, useClass: MockUserStore },
        { provide: MatDialog, useClass: MockMatDialog }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #submitPreferences()', async () => {
    // const result = component.submitPreferences();
  });

  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #sucess()', async () => {
    // const result = component.sucess();
  });
});
