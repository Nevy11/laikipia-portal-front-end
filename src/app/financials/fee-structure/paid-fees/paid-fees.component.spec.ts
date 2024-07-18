import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidFeesComponent } from './paid-fees.component';

describe('PaidFeesComponent', () => {
  let component: PaidFeesComponent;
  let fixture: ComponentFixture<PaidFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaidFeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaidFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
