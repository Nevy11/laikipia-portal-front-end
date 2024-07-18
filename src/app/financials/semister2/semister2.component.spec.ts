import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semister2Component } from './semister2.component';

describe('Semister2Component', () => {
  let component: Semister2Component;
  let fixture: ComponentFixture<Semister2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Semister2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Semister2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
