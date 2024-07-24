import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelected2Component } from './year-selected2.component';

describe('YearSelected2Component', () => {
  let component: YearSelected2Component;
  let fixture: ComponentFixture<YearSelected2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearSelected2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearSelected2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
