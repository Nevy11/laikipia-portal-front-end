import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1ExamCardComponent } from './year1-exam-card.component';

describe('Year1ExamCardComponent', () => {
  let component: Year1ExamCardComponent;
  let fixture: ComponentFixture<Year1ExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1ExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1ExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
