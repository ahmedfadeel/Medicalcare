import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptionistComponent } from './reciptionist.component';

describe('ReciptionistComponent', () => {
  let component: ReciptionistComponent;
  let fixture: ComponentFixture<ReciptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
