import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2sem2Component } from './year2sem2.component';

describe('Year2sem2Component', () => {
  let component: Year2sem2Component;
  let fixture: ComponentFixture<Year2sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year2sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
