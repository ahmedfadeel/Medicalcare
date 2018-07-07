import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnupPatientComponent } from './sighnup-patient.component';

describe('SighnupPatientComponent', () => {
  let component: SighnupPatientComponent;
  let fixture: ComponentFixture<SighnupPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SighnupPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SighnupPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
