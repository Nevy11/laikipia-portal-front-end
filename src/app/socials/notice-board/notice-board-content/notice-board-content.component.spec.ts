import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardContentComponent } from './notice-board-content.component';

describe('NoticeBoardContentComponent', () => {
  let component: NoticeBoardContentComponent;
  let fixture: ComponentFixture<NoticeBoardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeBoardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeBoardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
