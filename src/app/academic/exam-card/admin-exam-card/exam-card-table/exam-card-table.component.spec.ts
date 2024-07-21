import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCardTableComponent } from './exam-card-table.component';

describe('ExamCardTableComponent', () => {
  let component: ExamCardTableComponent;
  let fixture: ComponentFixture<ExamCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamCardTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
