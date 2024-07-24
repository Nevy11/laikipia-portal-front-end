import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid2sem2Component } from './paid2sem2.component';

describe('Paid2sem2Component', () => {
  let component: Paid2sem2Component;
  let fixture: ComponentFixture<Paid2sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid2sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid2sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
