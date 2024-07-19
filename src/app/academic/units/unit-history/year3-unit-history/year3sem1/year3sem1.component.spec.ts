import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3sem1Component } from './year3sem1.component';

describe('Year3sem1Component', () => {
  let component: Year3sem1Component;
  let fixture: ComponentFixture<Year3sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year3sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
