import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiognesComponent } from './view-diognes.component';

describe('ViewDiognesComponent', () => {
  let component: ViewDiognesComponent;
  let fixture: ComponentFixture<ViewDiognesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiognesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiognesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
