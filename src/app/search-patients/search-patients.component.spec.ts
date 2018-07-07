import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientsComponent } from './search-patients.component';

describe('SearchPatientsComponent', () => {
  let component: SearchPatientsComponent;
  let fixture: ComponentFixture<SearchPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
