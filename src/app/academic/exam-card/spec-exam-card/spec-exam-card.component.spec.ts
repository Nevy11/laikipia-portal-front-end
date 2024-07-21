import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecExamCardComponent } from './spec-exam-card.component';

describe('SpecExamCardComponent', () => {
  let component: SpecExamCardComponent;
  let fixture: ComponentFixture<SpecExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
