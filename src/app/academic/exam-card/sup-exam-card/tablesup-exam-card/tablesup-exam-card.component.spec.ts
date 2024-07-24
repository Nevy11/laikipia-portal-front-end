import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesupExamCardComponent } from './tablesup-exam-card.component';

describe('TablesupExamCardComponent', () => {
  let component: TablesupExamCardComponent;
  let fixture: ComponentFixture<TablesupExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesupExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesupExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
