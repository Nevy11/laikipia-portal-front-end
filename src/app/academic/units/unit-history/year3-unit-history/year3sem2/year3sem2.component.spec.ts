import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3sem2Component } from './year3sem2.component';

describe('Year3sem2Component', () => {
  let component: Year3sem2Component;
  let fixture: ComponentFixture<Year3sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year3sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
