import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4FeesComponent } from './year4-fees.component';

describe('Year4FeesComponent', () => {
  let component: Year4FeesComponent;
  let fixture: ComponentFixture<Year4FeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year4FeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Year4FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
