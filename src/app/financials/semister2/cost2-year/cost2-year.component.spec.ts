import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cost2YearComponent } from './cost2-year.component';

describe('Cost2YearComponent', () => {
  let component: Cost2YearComponent;
  let fixture: ComponentFixture<Cost2YearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cost2YearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cost2YearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
