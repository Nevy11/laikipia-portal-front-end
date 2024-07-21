import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamCardComponent } from './admin-exam-card.component';

describe('AdminExamCardComponent', () => {
  let component: AdminExamCardComponent;
  let fixture: ComponentFixture<AdminExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
