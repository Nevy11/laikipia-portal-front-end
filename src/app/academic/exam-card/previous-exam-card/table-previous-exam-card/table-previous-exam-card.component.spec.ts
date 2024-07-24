import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePreviousExamCardComponent } from './table-previous-exam-card.component';

describe('TablePreviousExamCardComponent', () => {
  let component: TablePreviousExamCardComponent;
  let fixture: ComponentFixture<TablePreviousExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePreviousExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePreviousExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
