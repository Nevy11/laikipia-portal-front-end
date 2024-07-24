import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2tableComponent } from './year2table.component';

describe('Year2tableComponent', () => {
  let component: Year2tableComponent;
  let fixture: ComponentFixture<Year2tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2tableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year2tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
