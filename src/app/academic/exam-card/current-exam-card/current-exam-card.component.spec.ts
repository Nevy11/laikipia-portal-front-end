import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentExamCardComponent } from './current-exam-card.component';

describe('CurrentExamCardComponent', () => {
  let component: CurrentExamCardComponent;
  let fixture: ComponentFixture<CurrentExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
