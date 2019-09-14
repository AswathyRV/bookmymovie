import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

describe('AdminService', () => {
  let adminService: AdminService; // Add this
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService],
      imports: [HttpClientModule]
    });

    adminService = TestBed.get(AdminService); // Add this
  });

  it('should be created', () => {
    // Remove inject()
    expect(adminService).toBeTruthy();
  });
  describe('newTheater', () => {
    it('should return a collection of theatres', () => {
      const theatresResponse =[{
        "theaters": [
          {
            "tid": "1",
            "name": "Kapali",
            "city": "Bangalore",
            "gLocation": "test",
            "capacity": 50,
            "movies": [
              474350
            ]
          }
        ]
      }]
      let response;
      spyOn(adminService, "newTheater").and.returnValue(of(adminService));

      TestBed.get(adminService).subcribe(res => {
        expect(res.length).toBe(1);
        expect(res).toEqual(theatresResponse);
      });

      expect(response).toEqual(theatresResponse);
    });
  });
});
