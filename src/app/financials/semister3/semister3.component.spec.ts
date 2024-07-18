import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semister3Component } from './semister3.component';

describe('Semister3Component', () => {
  let component: Semister3Component;
  let fixture: ComponentFixture<Semister3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Semister3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Semister3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
