import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1sem1Component } from './year1sem1.component';

describe('Year1sem1Component', () => {
  let component: Year1sem1Component;
  let fixture: ComponentFixture<Year1sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
