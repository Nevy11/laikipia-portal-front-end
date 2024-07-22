import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefermentTitleComponent } from './deferment-title.component';

describe('DefermentTitleComponent', () => {
  let component: DefermentTitleComponent;
  let fixture: ComponentFixture<DefermentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefermentTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefermentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
