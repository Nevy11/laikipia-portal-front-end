import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelBookingContentComponent } from './hostel-booking-content.component';

describe('HostelBookingContentComponent', () => {
  let component: HostelBookingContentComponent;
  let fixture: ComponentFixture<HostelBookingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostelBookingContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelBookingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
