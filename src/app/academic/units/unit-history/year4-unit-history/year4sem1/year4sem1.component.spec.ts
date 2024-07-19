import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4sem1Component } from './year4sem1.component';

describe('Year4sem1Component', () => {
  let component: Year4sem1Component;
  let fixture: ComponentFixture<Year4sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year4sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year4sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
