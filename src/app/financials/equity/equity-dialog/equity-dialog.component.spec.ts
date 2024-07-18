import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityDialogComponent } from './equity-dialog.component';

describe('EquityDialogComponent', () => {
  let component: EquityDialogComponent;
  let fixture: ComponentFixture<EquityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquityDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
