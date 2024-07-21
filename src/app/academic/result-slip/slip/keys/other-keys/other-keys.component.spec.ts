import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherKeysComponent } from './other-keys.component';

describe('OtherKeysComponent', () => {
  let component: OtherKeysComponent;
  let fixture: ComponentFixture<OtherKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
