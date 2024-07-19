import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2UnitHistoryComponent } from './year2-unit-history.component';

describe('Year2UnitHistoryComponent', () => {
  let component: Year2UnitHistoryComponent;
  let fixture: ComponentFixture<Year2UnitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2UnitHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year2UnitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
