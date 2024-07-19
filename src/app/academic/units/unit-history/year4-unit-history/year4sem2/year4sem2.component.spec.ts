import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4sem2Component } from './year4sem2.component';

describe('Year4sem2Component', () => {
  let component: Year4sem2Component;
  let fixture: ComponentFixture<Year4sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year4sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year4sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
