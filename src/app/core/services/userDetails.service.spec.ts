import { TestBed } from '@angular/core/testing';
import { UserDetailService } from './userDetails.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JSON_SERVER_URLS } from 'src/app/shared/config';
import { userInfo } from 'os';
import { store } from '@angular/core/src/render3';
import { Store } from '@ngrx/store';
import { UserState } from '../store/reducers/userDetails.reducer';
import { SetUser } from '../store/action/userDetails.action';

describe('UserDetailService', () => {
  let userDetailService: UserDetailService; // Add this
  let httpClient: HttpClient; // Add this
  let store: Store<UserState>;

  class MockStore {
      select(){
          return [];
      }
      dispatch() {
      }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailService],
      imports: [HttpClientModule],
      providers: [HttpClient, {provide: store , useClass: MockStore}]
    });

    userDetailService = TestBed.get(UserDetailService); // Add this
    httpClient = TestBed.get(HttpClient); // Add this
  });

  it('should be created', () => {
    // Remove inject()
    expect(UserDetailService).toBeTruthy();
  });
// getUserDetailData
it('getUserDetailData', () => {
   let mockUserdetails = {
        "users": [
          {
            "uid": "101590852450539536978",
            "name": "Punith Gowda N",
            "image": "https://lh3.googleusercontent.com/a-/AAuE7mDVwHhauttwavwJycmv7PhK-GrdSwoCKLSytD21=s96-c",
            "email": "hi@punith.me",
            "role": "Admin",
            "preferences": {
              "lang": "en",
              "generes": [],
              "theaters": []
            },
            "ratings": {
                "movieId": "",
                "rating": ""
              }
        }
          ]
        };
       let  mockauthDetails = JSON.parse(sessionStorage.getItem('authDetails'));
       store.dispatch(new SetUser(this.authDetails));
    });
});
