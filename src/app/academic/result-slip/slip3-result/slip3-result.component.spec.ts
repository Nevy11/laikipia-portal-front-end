import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slip3ResultComponent } from './slip3-result.component';

describe('Slip3ResultComponent', () => {
  let component: Slip3ResultComponent;
  let fixture: ComponentFixture<Slip3ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slip3ResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slip3ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
