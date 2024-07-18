import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostYear4Component } from './cost-year4.component';

describe('CostYear4Component', () => {
  let component: CostYear4Component;
  let fixture: ComponentFixture<CostYear4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostYear4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostYear4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
