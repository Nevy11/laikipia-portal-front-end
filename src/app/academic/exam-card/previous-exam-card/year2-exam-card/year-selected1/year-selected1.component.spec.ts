import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelected1Component } from './year-selected1.component';

describe('YearSelected1Component', () => {
  let component: YearSelected1Component;
  let fixture: ComponentFixture<YearSelected1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearSelected1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearSelected1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
