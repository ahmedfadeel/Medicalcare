import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdrugsComponent } from './searchdrugs.component';

describe('SearchdrugsComponent', () => {
  let component: SearchdrugsComponent;
  let fixture: ComponentFixture<SearchdrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
