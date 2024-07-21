import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2sem1Component } from './year2sem1.component';

describe('Year2sem1Component', () => {
  let component: Year2sem1Component;
  let fixture: ComponentFixture<Year2sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year2sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
