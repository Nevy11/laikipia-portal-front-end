import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3FeesComponent } from './year3-fees.component';

describe('Year3FeesComponent', () => {
  let component: Year3FeesComponent;
  let fixture: ComponentFixture<Year3FeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3FeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Year3FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
