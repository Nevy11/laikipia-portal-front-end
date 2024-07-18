import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOpDialogueComponent } from './co-op-dialogue.component';

describe('CoOpDialogueComponent', () => {
  let component: CoOpDialogueComponent;
  let fixture: ComponentFixture<CoOpDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoOpDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoOpDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
