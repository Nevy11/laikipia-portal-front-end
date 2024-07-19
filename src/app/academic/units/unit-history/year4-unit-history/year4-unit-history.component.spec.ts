import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4UnitHistoryComponent } from './year4-unit-history.component';

describe('Year4UnitHistoryComponent', () => {
  let component: Year4UnitHistoryComponent;
  let fixture: ComponentFixture<Year4UnitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year4UnitHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year4UnitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
