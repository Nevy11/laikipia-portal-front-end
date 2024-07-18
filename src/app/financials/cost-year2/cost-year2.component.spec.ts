import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostYear2Component } from './cost-year2.component';

describe('CostYear2Component', () => {
  let component: CostYear2Component;
  let fixture: ComponentFixture<CostYear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostYear2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostYear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
