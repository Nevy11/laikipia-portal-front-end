import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1tableExamCardComponent } from './year1table-exam-card.component';

describe('Year1tableExamCardComponent', () => {
  let component: Year1tableExamCardComponent;
  let fixture: ComponentFixture<Year1tableExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1tableExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1tableExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
