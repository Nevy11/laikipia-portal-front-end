import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallContainerComponent } from './small-container.component';

describe('SmallContainerComponent', () => {
  let component: SmallContainerComponent;
  let fixture: ComponentFixture<SmallContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
