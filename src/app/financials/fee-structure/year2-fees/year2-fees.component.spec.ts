import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2FeesComponent } from './year2-fees.component';

describe('Year2FeesComponent', () => {
  let component: Year2FeesComponent;
  let fixture: ComponentFixture<Year2FeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2FeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Year2FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
