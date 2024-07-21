import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExamCardComponent } from './previous-exam-card.component';

describe('PreviousExamCardComponent', () => {
  let component: PreviousExamCardComponent;
  let fixture: ComponentFixture<PreviousExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
