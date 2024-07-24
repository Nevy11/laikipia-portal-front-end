import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid4sem1Component } from './paid4sem1.component';

describe('Paid4sem1Component', () => {
  let component: Paid4sem1Component;
  let fixture: ComponentFixture<Paid4sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid4sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid4sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
