import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEvaluationsComponent } from './history-evaluations.component';

describe('HistoryEvaluationsComponent', () => {
  let component: HistoryEvaluationsComponent;
  let fixture: ComponentFixture<HistoryEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryEvaluationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
