import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid2sem1Component } from './paid2sem1.component';

describe('Paid2sem1Component', () => {
  let component: Paid2sem1Component;
  let fixture: ComponentFixture<Paid2sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid2sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid2sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
