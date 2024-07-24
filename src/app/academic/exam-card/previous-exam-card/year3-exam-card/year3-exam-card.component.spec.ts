import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3ExamCardComponent } from './year3-exam-card.component';

describe('Year3ExamCardComponent', () => {
  let component: Year3ExamCardComponent;
  let fixture: ComponentFixture<Year3ExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3ExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year3ExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
