import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slip2ResultComponent } from './slip2-result.component';

describe('Slip2ResultComponent', () => {
  let component: Slip2ResultComponent;
  let fixture: ComponentFixture<Slip2ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Slip2ResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slip2ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
