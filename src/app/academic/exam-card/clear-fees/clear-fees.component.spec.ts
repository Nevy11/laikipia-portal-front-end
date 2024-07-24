import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFeesComponent } from './clear-fees.component';

describe('ClearFeesComponent', () => {
  let component: ClearFeesComponent;
  let fixture: ComponentFixture<ClearFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearFeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
