import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paid1sem2Component } from './paid1sem2.component';

describe('Paid1sem2Component', () => {
  let component: Paid1sem2Component;
  let fixture: ComponentFixture<Paid1sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paid1sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paid1sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
