import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1FeesComponent } from './year1-fees.component';

describe('Year1FeesComponent', () => {
  let component: Year1FeesComponent;
  let fixture: ComponentFixture<Year1FeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year1FeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Year1FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
