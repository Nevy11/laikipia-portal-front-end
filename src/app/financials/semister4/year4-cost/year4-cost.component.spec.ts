import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4CostComponent } from './year4-cost.component';

describe('Year4CostComponent', () => {
  let component: Year4CostComponent;
  let fixture: ComponentFixture<Year4CostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year4CostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Year4CostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
