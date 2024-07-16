import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVirtualAssistantComponent } from './app-virtual-assistant.component';

describe('AppVirtualAssistantComponent', () => {
  let component: AppVirtualAssistantComponent;
  let fixture: ComponentFixture<AppVirtualAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppVirtualAssistantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppVirtualAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
