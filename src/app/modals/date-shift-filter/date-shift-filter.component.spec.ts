import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateShiftFilterComponent } from './date-shift-filter.component';

describe('DateShiftFilterComponent', () => {
  let component: DateShiftFilterComponent;
  let fixture: ComponentFixture<DateShiftFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateShiftFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateShiftFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
