import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPreviousCardComponent } from './no-previous-card.component';

describe('NoPreviousCardComponent', () => {
  let component: NoPreviousCardComponent;
  let fixture: ComponentFixture<NoPreviousCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoPreviousCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPreviousCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
