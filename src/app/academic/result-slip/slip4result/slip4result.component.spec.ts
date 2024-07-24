import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slip4resultComponent } from './slip4result.component';

describe('Slip4resultComponent', () => {
  let component: Slip4resultComponent;
  let fixture: ComponentFixture<Slip4resultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slip4resultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slip4resultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
