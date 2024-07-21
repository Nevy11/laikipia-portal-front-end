import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSignaturesComponent } from './right-signatures.component';

describe('RightSignaturesComponent', () => {
  let component: RightSignaturesComponent;
  let fixture: ComponentFixture<RightSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSignaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
