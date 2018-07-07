import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDoctorComponent } from './profile-doctor.component';

describe('ProfileDoctorComponent', () => {
  let component: ProfileDoctorComponent;
  let fixture: ComponentFixture<ProfileDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
