import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefermentTableComponent } from './deferment-table.component';

describe('DefermentTableComponent', () => {
  let component: DefermentTableComponent;
  let fixture: ComponentFixture<DefermentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefermentTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefermentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
