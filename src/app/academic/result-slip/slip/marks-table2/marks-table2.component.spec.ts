import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTable2Component } from './marks-table2.component';

describe('MarksTable2Component', () => {
  let component: MarksTable2Component;
  let fixture: ComponentFixture<MarksTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarksTable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
