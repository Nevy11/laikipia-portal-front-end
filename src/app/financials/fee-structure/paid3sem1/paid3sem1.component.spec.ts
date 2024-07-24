import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid3sem1Component } from './paid3sem1.component';

describe('Paid3sem1Component', () => {
  let component: Paid3sem1Component;
  let fixture: ComponentFixture<Paid3sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid3sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid3sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
