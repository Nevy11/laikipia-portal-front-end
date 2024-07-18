import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemisterButtonComponent } from './semister-button.component';

describe('SemisterButtonComponent', () => {
  let component: SemisterButtonComponent;
  let fixture: ComponentFixture<SemisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemisterButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
