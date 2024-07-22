import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppFinanceComponent } from './mobile-app-finance.component';

describe('MobileAppFinanceComponent', () => {
  let component: MobileAppFinanceComponent;
  let fixture: ComponentFixture<MobileAppFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileAppFinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
