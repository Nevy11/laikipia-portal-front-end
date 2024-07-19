import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3UnitHistoryComponent } from './year3-unit-history.component';

describe('Year3UnitHistoryComponent', () => {
  let component: Year3UnitHistoryComponent;
  let fixture: ComponentFixture<Year3UnitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3UnitHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year3UnitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
