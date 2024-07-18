import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcbComponent } from './kcb.component';

describe('KcbComponent', () => {
  let component: KcbComponent;
  let fixture: ComponentFixture<KcbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KcbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
