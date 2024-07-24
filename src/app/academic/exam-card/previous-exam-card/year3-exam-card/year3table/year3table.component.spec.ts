import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3tableComponent } from './year3table.component';

describe('Year3tableComponent', () => {
  let component: Year3tableComponent;
  let fixture: ComponentFixture<Year3tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year3tableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Year3tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
