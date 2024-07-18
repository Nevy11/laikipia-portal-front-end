import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostYear3Component } from './cost-year3.component';

describe('CostYear3Component', () => {
  let component: CostYear3Component;
  let fixture: ComponentFixture<CostYear3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostYear3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostYear3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
