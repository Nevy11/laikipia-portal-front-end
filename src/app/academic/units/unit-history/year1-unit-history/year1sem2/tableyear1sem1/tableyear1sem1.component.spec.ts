import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tableyear1sem1Component } from './tableyear1sem1.component';

describe('Tableyear1sem1Component', () => {
  let component: Tableyear1sem1Component;
  let fixture: ComponentFixture<Tableyear1sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tableyear1sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tableyear1sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
