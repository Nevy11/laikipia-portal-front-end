import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1sem2Component } from './year1sem2.component';

describe('Year1sem2Component', () => {
  let component: Year1sem2Component;
  let fixture: ComponentFixture<Year1sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
