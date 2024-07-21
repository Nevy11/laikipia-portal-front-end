import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoExamCardComponent } from './student-info-exam-card.component';

describe('StudentInfoExamCardComponent', () => {
  let component: StudentInfoExamCardComponent;
  let fixture: ComponentFixture<StudentInfoExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentInfoExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
