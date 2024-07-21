import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupExamCardComponent } from './sup-exam-card.component';

describe('SupExamCardComponent', () => {
  let component: SupExamCardComponent;
  let fixture: ComponentFixture<SupExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
