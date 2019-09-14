import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JSON_SERVER_URLS } from 'src/app/shared/config';
import { userInfo } from 'os';
import { UserDetailService } from './userDetails.service';

describe('LoginService', () => {
  let loginService: LoginService; // Add this
  let httpClient: HttpClient; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginService],
      imports: [HttpClientModule],
      providers: [HttpClient]
    });

    loginService = TestBed.get(LoginService); // Add this
    httpClient = TestBed.get(HttpClient); // Add this
  });

  it('should be created', () => {
    // Remove inject()
    expect(LoginService).toBeTruthy();
  });
// getUserData
it('getUserData', () => {
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
            }
        }
          ]
        };
    httpClient.get(environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS).subscribe(response =>{
        response = mockUserdetails;
        });
    });
});
