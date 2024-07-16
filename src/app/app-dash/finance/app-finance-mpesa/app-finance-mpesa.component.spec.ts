import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFinanceMpesaComponent } from './app-finance-mpesa.component';

describe('AppFinanceMpesaComponent', () => {
  let component: AppFinanceMpesaComponent;
  let fixture: ComponentFixture<AppFinanceMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppFinanceMpesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFinanceMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
