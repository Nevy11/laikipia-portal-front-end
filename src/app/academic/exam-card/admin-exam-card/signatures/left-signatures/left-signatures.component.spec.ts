import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSignaturesComponent } from './left-signatures.component';

describe('LeftSignaturesComponent', () => {
  let component: LeftSignaturesComponent;
  let fixture: ComponentFixture<LeftSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSignaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
