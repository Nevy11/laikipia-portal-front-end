import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTable3Component } from './marks-table3.component';

describe('MarksTable3Component', () => {
  let component: MarksTable3Component;
  let fixture: ComponentFixture<MarksTable3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarksTable3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
