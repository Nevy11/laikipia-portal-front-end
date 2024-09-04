import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNewsComponent } from './large-news.component';

describe('LargeNewsComponent', () => {
  let component: LargeNewsComponent;
  let fixture: ComponentFixture<LargeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
