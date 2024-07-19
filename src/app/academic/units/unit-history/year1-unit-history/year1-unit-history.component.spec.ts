import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1UnitHistoryComponent } from './year1-unit-history.component';

describe('Year1UnitHistoryComponent', () => {
  let component: Year1UnitHistoryComponent;
  let fixture: ComponentFixture<Year1UnitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1UnitHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1UnitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
