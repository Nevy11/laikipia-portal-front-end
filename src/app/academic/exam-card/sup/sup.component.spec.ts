import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupComponent } from './sup.component';

describe('SupComponent', () => {
  let component: SupComponent;
  let fixture: ComponentFixture<SupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
