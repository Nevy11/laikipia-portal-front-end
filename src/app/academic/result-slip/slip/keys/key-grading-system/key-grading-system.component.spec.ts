import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyGradingSystemComponent } from './key-grading-system.component';

describe('KeyGradingSystemComponent', () => {
  let component: KeyGradingSystemComponent;
  let fixture: ComponentFixture<KeyGradingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyGradingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyGradingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
