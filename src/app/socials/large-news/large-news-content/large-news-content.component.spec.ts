import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNewsContentComponent } from './large-news-content.component';

describe('LargeNewsContentComponent', () => {
  let component: LargeNewsContentComponent;
  let fixture: ComponentFixture<LargeNewsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeNewsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
