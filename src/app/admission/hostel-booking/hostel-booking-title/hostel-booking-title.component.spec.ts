import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelBookingTitleComponent } from './hostel-booking-title.component';

describe('HostelBookingTitleComponent', () => {
  let component: HostelBookingTitleComponent;
  let fixture: ComponentFixture<HostelBookingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostelBookingTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelBookingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
