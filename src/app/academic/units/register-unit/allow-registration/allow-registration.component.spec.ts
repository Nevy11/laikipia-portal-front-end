import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowRegistrationComponent } from './allow-registration.component';

describe('AllowRegistrationComponent', () => {
  let component: AllowRegistrationComponent;
  let fixture: ComponentFixture<AllowRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllowRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
