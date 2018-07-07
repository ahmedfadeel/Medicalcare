import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePatientInfoComponent } from './profile-patient-info.component';

describe('ProfilePatientInfoComponent', () => {
  let component: ProfilePatientInfoComponent;
  let fixture: ComponentFixture<ProfilePatientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePatientInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
