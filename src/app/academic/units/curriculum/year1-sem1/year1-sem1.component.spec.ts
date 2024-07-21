import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1Sem1Component } from './year1-sem1.component';

describe('Year1Sem1Component', () => {
  let component: Year1Sem1Component;
  let fixture: ComponentFixture<Year1Sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1Sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year1Sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
