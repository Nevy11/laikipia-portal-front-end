import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid4sem2Component } from './paid4sem2.component';

describe('Paid4sem2Component', () => {
  let component: Paid4sem2Component;
  let fixture: ComponentFixture<Paid4sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid4sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid4sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
