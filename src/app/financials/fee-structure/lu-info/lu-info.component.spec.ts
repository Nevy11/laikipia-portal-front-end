import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuInfoComponent } from './lu-info.component';

describe('LuInfoComponent', () => {
  let component: LuInfoComponent;
  let fixture: ComponentFixture<LuInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
