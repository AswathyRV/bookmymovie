import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { AdminService } from '../../services/admin.service';
import { Store, State } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as MovieState from '../../../reducers/index';

 class MockStore {
select (){
  return [];
}
}
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let theaterList: any;
  let spy: any;
  let adminService: AdminService;
  let store: Store<MovieState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [ ReactiveFormsModule, FormsModule , Store, State],
      providers: [AdminService , {provide: store , useClass: MockStore}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ngOnit', () => {
    theaterList = [];
    expect(store.select).toBe([]);
    expect(component.ngOnInit).toBeTruthy();
  });
  it('addTheater', () => {
    const formData = fixture.debugElement.nativeElement.formData;
   spy =spyOn(adminService, 'newTheater').and.returnValue(false);
   expect(adminService.newTheater).toHaveBeenCalled();
   component.addTheater(formData);

  });
});
