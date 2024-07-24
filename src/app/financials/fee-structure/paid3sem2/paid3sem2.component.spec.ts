import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid3sem2Component } from './paid3sem2.component';

describe('Paid3sem2Component', () => {
  let component: Paid3sem2Component;
  let fixture: ComponentFixture<Paid3sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid3sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid3sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
