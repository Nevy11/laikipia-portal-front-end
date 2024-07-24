import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2ExamCardComponent } from './year2-exam-card.component';

describe('Year2ExamCardComponent', () => {
  let component: Year2ExamCardComponent;
  let fixture: ComponentFixture<Year2ExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2ExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year2ExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
