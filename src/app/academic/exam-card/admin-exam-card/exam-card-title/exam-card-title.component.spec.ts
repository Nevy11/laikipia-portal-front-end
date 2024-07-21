import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCardTitleComponent } from './exam-card-title.component';

describe('ExamCardTitleComponent', () => {
  let component: ExamCardTitleComponent;
  let fixture: ComponentFixture<ExamCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamCardTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
