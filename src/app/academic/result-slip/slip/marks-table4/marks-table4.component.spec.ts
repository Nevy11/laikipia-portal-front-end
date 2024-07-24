import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTable4Component } from './marks-table4.component';

describe('MarksTable4Component', () => {
  let component: MarksTable4Component;
  let fixture: ComponentFixture<MarksTable4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarksTable4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksTable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
