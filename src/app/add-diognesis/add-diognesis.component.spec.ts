import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiognesisComponent } from './add-diognesis.component';

describe('AddDiognesisComponent', () => {
  let component: AddDiognesisComponent;
  let fixture: ComponentFixture<AddDiognesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiognesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiognesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
