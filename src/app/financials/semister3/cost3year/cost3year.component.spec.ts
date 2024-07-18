import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cost3yearComponent } from './cost3year.component';

describe('Cost3yearComponent', () => {
  let component: Cost3yearComponent;
  let fixture: ComponentFixture<Cost3yearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cost3yearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cost3yearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
