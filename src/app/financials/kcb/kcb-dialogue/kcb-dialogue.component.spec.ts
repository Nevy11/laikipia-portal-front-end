import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcbDialogueComponent } from './kcb-dialogue.component';

describe('KcbDialogueComponent', () => {
  let component: KcbDialogueComponent;
  let fixture: ComponentFixture<KcbDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KcbDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcbDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
