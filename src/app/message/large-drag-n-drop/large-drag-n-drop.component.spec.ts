import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDragNDropComponent } from './large-drag-n-drop.component';

describe('LargeDragNDropComponent', () => {
  let component: LargeDragNDropComponent;
  let fixture: ComponentFixture<LargeDragNDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeDragNDropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeDragNDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
