import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semister4Component } from './semister4.component';

describe('Semister4Component', () => {
  let component: Semister4Component;
  let fixture: ComponentFixture<Semister4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Semister4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Semister4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
