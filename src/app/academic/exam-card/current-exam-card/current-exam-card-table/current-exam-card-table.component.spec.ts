import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentExamCardTableComponent } from './current-exam-card-table.component';

describe('CurrentExamCardTableComponent', () => {
  let component: CurrentExamCardTableComponent;
  let fixture: ComponentFixture<CurrentExamCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentExamCardTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentExamCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
